const SPREADSHEET_ID = "1yOomIA71hwPQGVFRww6OgF5Arm2Vym79y2sZ7_Fk9P4";
const SHEET_NAME = "Svar";

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Quizstatistik")
    .addItem("Tom insamlade svar", "clearQuizStatistics")
    .addToUi();
}

function clearQuizStatistics() {
  const ui = SpreadsheetApp.getUi();
  const confirmation = ui.alert(
    "Tom insamlade svar?",
    "Alla insamlade quizsvar tas bort. Flikarna med analyser behalls.",
    ui.ButtonSet.YES_NO,
  );

  if (confirmation !== ui.Button.YES) return;

  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  const lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.getRange(2, 1, lastRow - 1, 9).clearContent();
  }

  ui.alert("Quizstatistiken ar tomd och redo for en ny omgang.");
}

function doGet() {
  return ContentService.createTextOutput("Quizstatistik ar aktiv.");
}

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  if (!data || !Array.isArray(data.answers) || !data.answers.length) {
    return ContentService.createTextOutput("Inga svar att spara.");
  }

  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
  const timestamp = new Date();
  const rows = data.answers.map((answer) => [
    timestamp,
    data.quizId || "",
    data.chapter || "",
    answer.questionNumber || "",
    answer.questionText || "",
    answer.selectedAnswer || "",
    answer.correctAnswer || "",
    answer.isCorrect ? 1 : 0,
    data.pagePath || "",
  ]);

  sheet.getRange(sheet.getLastRow() + 1, 1, rows.length, rows[0].length).setValues(rows);
  return ContentService.createTextOutput("OK");
}
