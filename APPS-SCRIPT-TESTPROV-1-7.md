# Komplett Apps Script för quiz och testprov 1–7

Koden nedan är en **fullständig ersättning för hela `Code.gs`**. Den innehåller både den gamla anonyma quizinsamlingen och den nya insamlingen av förnamn samt repetitionsbehov.

## Ersätt hela Code.gs

1. Öppna kalkylarket `Quizstatistik Programmering 1`.
2. Välj **Tillägg > Apps Script** och öppna `Code.gs`.
3. Markera all befintlig kod och ersätt den med hela kodblocket nedan.
4. Spara.

```js
const SPREADSHEET_ID = "1yOomIA71hwPQGVFRww6OgF5Arm2Vym79y2sZ7_Fk9P4";
const ANSWERS_SHEET_NAME = "Svar";
const TEST_SUMMARY_SHEET_NAME = "Testprov 1-7";

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

  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID)
    .getSheetByName(ANSWERS_SHEET_NAME);
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

  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID)
    .getSheetByName(TEST_SUMMARY_SHEET_NAME);
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
  let text = String(value || "").trim().slice(0, maxLength);
  if (/^[=+\-@]/.test(text)) text = "'" + text;
  return text;
}

function saveTestSummary(data) {
  const firstName = safeText(data.studentName, 50);
  const practiceAreas = safeText(data.practiceAreas, 1500);
  const recommendations = safeText(data.recommendations, 2000);

  if (!firstName || !practiceAreas) {
    return ContentService.createTextOutput(
      "Förnamn eller repetitionsområde saknas.",
    );
  }

  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID)
    .getSheetByName(TEST_SUMMARY_SHEET_NAME);
  if (!sheet) {
    return ContentService.createTextOutput("Fliken Testprov 1-7 saknas.");
  }

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    sheet.appendRow([
      new Date(),
      firstName,
      practiceAreas,
      recommendations,
    ]);
  } finally {
    lock.releaseLock();
  }

  return ContentService.createTextOutput("OK");
}

function saveAnonymousQuizAnswers(data) {
  if (!Array.isArray(data.answers) || !data.answers.length) {
    return ContentService.createTextOutput("Inga svar att spara.");
  }

  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID)
    .getSheetByName(ANSWERS_SHEET_NAME);
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
```

## Publicera den nya skriptversionen

Att bara spara koden räcker inte:

1. Välj **Implementera > Hantera implementeringar**.
2. Klicka på pennan för den aktiva webbappen.
3. Välj **Ny version**.
4. Behåll **Kör som: Jag** och **Åtkomst: Alla**.
5. Klicka på **Implementera**.

Webbappsadressen ska fortsätta vara samma `/exec`-adress.

## Kontroll

Öppna webbappsadressen direkt. Den ska nu visa:

```text
Quizstatistik och testprovsinsamling är aktiv.
```

Skriv sedan `klart` i chatten. Då aktiveras provets insamling och kopplingen testas med en syntetisk testrad.
