const SPREADSHEET_ID = "1yOomIA71hwPQGVFRww6OgF5Arm2Vym79y2sZ7_Fk9P4";
const ANSWERS_SHEET_NAME = "Svar";
const TEST_SUMMARY_SHEET_NAME = "Testprov 1-7";
const TEST_SHEETS = {
  "kapitel-1-7-n4q8x2": TEST_SUMMARY_SHEET_NAME,
  "kapitel-1-13-v8m3q6": "Testprov 1-13 v8m3q6",
};

// Creates missing result tabs only; never clears or replaces existing results.
function setupTestSheets() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  Object.values(TEST_SHEETS).forEach((name) => {
    if (spreadsheet.getSheetByName(name)) return;
    const sheet = spreadsheet.insertSheet(name);
    if (sheet.getMaxColumns() > 4) sheet.deleteColumns(5, sheet.getMaxColumns() - 4);
    sheet.appendRow(["Tid", "Förnamn", "Antal rätt", "Rekommenderad repetition"]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, 4).setFontWeight("bold");
    sheet.setColumnWidth(1, 160);
    sheet.setColumnWidth(2, 140);
    sheet.setColumnWidth(3, 100);
    sheet.setColumnWidth(4, 650);
    sheet.getRange("A:A").setNumberFormat("yyyy-mm-dd hh:mm:ss");
    sheet.getRange("D:D").setWrap(true);
  });
}

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Quizstatistik")
    .addItem("Töm insamlade quizsvar", "clearQuizStatistics")
    .addItem("Töm testprovssammanfattningar", "clearTestSummaries")
    .addToUi();
}

function clearQuizStatistics() {
  const ui = SpreadsheetApp.getUi();
  const confirmation = ui.alert(
    "Töm insamlade quizsvar?",
    "Alla anonyma quizsvar tas bort. Analysflikarna behålls.",
    ui.ButtonSet.YES_NO,
  );
  if (confirmation !== ui.Button.YES) return;

  const sheet =
    SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(ANSWERS_SHEET_NAME);
  if (!sheet) {
    ui.alert("Fliken Svar saknas.");
    return;
  }

  const lastRow = sheet.getLastRow();
  if (lastRow > 1) sheet.getRange(2, 1, lastRow - 1, 9).clearContent();
  ui.alert("Quizstatistiken är tömd och redo för en ny omgång.");
}

function clearTestSummaries() {
  const ui = SpreadsheetApp.getUi();
  const confirmation = ui.alert(
    "Töm testprovssammanfattningar?",
    "Alla insamlade förnamn och repetitionsrekommendationer tas bort.",
    ui.ButtonSet.YES_NO,
  );
  if (confirmation !== ui.Button.YES) return;

  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(
    TEST_SUMMARY_SHEET_NAME,
  );
  if (!sheet) {
    ui.alert("Fliken Testprov 1-7 saknas.");
    return;
  }

  const lastRow = sheet.getLastRow();
  if (lastRow > 1) sheet.getRange(2, 1, lastRow - 1, 4).clearContent();
  ui.alert("Testprovssammanfattningarna är tömda.");
}

function doGet() {
  return ContentService.createTextOutput(
    "Quizstatistik och testprovsinsamling är aktiv.",
  );
}

function safeText(value, maxLength) {
  let text = String(value || "")
    .trim()
    .slice(0, maxLength);
  if (/^[=+\-@]/.test(text)) text = "'" + text;
  return text;
}

function saveTestSummary(data) {
  // Missing ID remains compatible with older callers. Unknown IDs cannot
  // fall through to the old tab or another course.
  const testId = String(data.testId || "kapitel-1-7-n4q8x2");
  if (!Object.prototype.hasOwnProperty.call(TEST_SHEETS, testId)) {
    return ContentService.createTextOutput("Okänt testId.");
  }
  const sheetName = TEST_SHEETS[testId];
  const firstName = safeText(data.studentName, 50);
  const score = Math.max(0, Math.min(20, Number(data.score) || 0));
  const recommendations = safeText(data.recommendations, 2000);

  if (!firstName || !recommendations) {
    return ContentService.createTextOutput(
      "Förnamn eller repetitionsrekommendation saknas.",
    );
  }

  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(
    sheetName,
  );
  if (!sheet) {
    return ContentService.createTextOutput("Resultatfliken saknas.");
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    sheet.appendRow([new Date(), firstName, score, recommendations]);
  } finally {
    lock.releaseLock();
  }

  return ContentService.createTextOutput("OK");
}

function saveAnonymousQuizAnswers(data) {
  if (!Array.isArray(data.answers) || !data.answers.length) {
    return ContentService.createTextOutput("Inga svar att spara.");
  }

  const sheet =
    SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(ANSWERS_SHEET_NAME);
  if (!sheet) {
    return ContentService.createTextOutput("Fliken Svar saknas.");
  }

  const timestamp = new Date();
  const rows = data.answers.map((answer) => [
    timestamp,
    safeText(data.quizId, 100),
    safeText(data.chapter, 100),
    Number(answer.questionNumber) || "",
    safeText(answer.questionText, 1000),
    safeText(answer.selectedAnswer, 500),
    safeText(answer.correctAnswer, 500),
    answer.isCorrect ? 1 : 0,
    safeText(data.pagePath, 500),
  ]);

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    sheet
      .getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length)
      .setValues(rows);
  } finally {
    lock.releaseLock();
  }

  return ContentService.createTextOutput("OK");
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    if (data && data.type === "testSummary") {
      return saveTestSummary(data);
    }
    if (!data) {
      return ContentService.createTextOutput("Ingen data att spara.");
    }

    return saveAnonymousQuizAnswers(data);
  } catch (error) {
    console.error(error);
    return ContentService.createTextOutput("Ogiltig data.");
  }
}
