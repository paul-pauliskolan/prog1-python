# Anonym quizstatistik i en kurswebb

Denna guide kopplar ett quiz pa en statisk kurswebb, till exempel GitHub Pages, till ett Google-kalkylark. Varje quizrattning sparas anonymt och kalkylarket visar vilka fragor som flest svarar fel pa.

Skapa ett eget kalkylark och ett eget Apps Script-projekt for varje kurs. Da halls statistik, behorigheter och analys tydligt atskilda.

## 1. Skapa kalkylarket

1. Skapa ett nytt Google-kalkylark med ett tydligt namn, till exempel `Quizstatistik Programmering 1`.
2. Byt namn pa den forsta fliken till `Svar`.
3. Skriv dessa rubriker pa rad 1:

```text
Tid | Quiz-ID | Kapitel | Fragenummer | Fraga | Valt svar | Ratt svar | Ratt (1/0) | Sida
```

4. Frys rad 1 och aktivera filter pa rubrikraden.
5. Skapa en andra flik med namnet `Vanligaste felsvaren`.
6. Skriv dessa rubriker pa rad 1:

```text
Kapitel | Fragenummer | Fraga | Felsvar | Antal svar | Andel fel
```

7. Klistra in denna formel i cell `A2` pa fliken `Vanligaste felsvaren`:

```gs
=IF(COUNTA(Svar!B2:B)=0;"";QUERY({Svar!C2:E\ARRAYFORMULA(1-N(Svar!H2:H))\ARRAYFORMULA(N(Svar!H2:H))};"select Col1,Col2,Col3,sum(Col4),count(Col5),avg(Col4) where Col1 is not null group by Col1,Col2,Col3 order by sum(Col4) desc, avg(Col4) desc label sum(Col4) '', count(Col5) '', avg(Col4) ''";0))
```

Formatera kolumn `F` som procent. Formeln uppdateras automatiskt nar nya svar kommer in och visar flest felsvar overst.

## 2. Hamta kalkylarkets id

I kalkylarkets adress finns id:t mellan `/d/` och `/edit`:

```text
https://docs.google.com/spreadsheets/d/DETTA_AR_KALKYLARKETS_ID/edit
```

Kopiera bara delen `DETTA_AR_KALKYLARKETS_ID`.

## 3. Skapa Apps Script

1. Oppna kalkylarket.
2. Valj **Extensions > Apps Script**.
3. Ersatt allt innehall i `Code.gs` med koden nedan.
4. Byt ut `KALKYLARKS_ID_HAR` mot kalkylarkets id fran steg 2.
5. Spara projektet.

```js
const SPREADSHEET_ID = "KALKYLARKS_ID_HAR";
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
```

## 4. Publicera Apps Script som webbapp

1. Klicka pa **Implementera > Ny implementering** i Apps Script.
2. Klicka pa kugghjulet vid implementeringstyp och valj **Webbapp**.
3. Valj **Kor som: Jag**.
4. Valj atkomst **Alla**.
5. Klicka pa **Implementera** och godkann behorigheterna.
6. Kopiera webbappsadressen som slutar med `/exec`.

Adressen ser ut ungefar sa har:

```text
https://script.google.com/macros/s/AKfycb.../exec
```

Om du senare andrar `doPost` eller `doGet` maste du skapa en ny version av webbappens implementering. Menyfunktionen `Quizstatistik` syns efter att kalkylarket har laddats om sedan skriptet sparats.

## 5. Lagg till rapportering i kurswebben

Lagg denna kod i den JavaScript-fil som laddas pa alla sidor med quiz. Byt ut `WEBBAPPS_ADRESS_HAR` mot adressen fran steg 4.

```js
const QUIZ_STATISTICS_ENDPOINT = "WEBBAPPS_ADRESS_HAR";

function recordQuizStatistics({ quizId, chapter, answers }) {
  if (!QUIZ_STATISTICS_ENDPOINT || !Array.isArray(answers) || !answers.length) {
    return;
  }

  fetch(QUIZ_STATISTICS_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      quizId,
      chapter,
      pagePath: window.location.pathname,
      answers,
    }),
  }).catch(() => {
    // Rattningen ska fungera aven om statistik inte kan skickas.
  });
}
```

Anropa funktionen efter att quizet har rattats. Exemplet nedan forutsatter att varje fraga har `text`, `answer` och att radioknapparna har varden `A`, `B`, `C` eller `D`.

```js
if (!form.dataset.statisticsSent) {
  recordQuizStatistics({
    quizId: "kapitel-1",
    chapter: "Kapitel 1",
    answers: questions.map((question, questionIndex) => {
      const name = `quiz-q${questionIndex + 1}`;
      const selected = form.querySelector(`input[name="${name}"]:checked`);

      return {
        questionNumber: questionIndex + 1,
        questionText: question.text,
        selectedAnswer: selected ? selected.value : "",
        correctAnswer: question.answer,
        isCorrect: Boolean(selected && selected.value === question.answer),
      };
    }),
  });

  form.dataset.statisticsSent = "true";
}
```

`form.dataset.statisticsSent` gor att samma elevs upprepade klick pa ratta-knappen inte raknas flera ganger. Om quizet laddas om behandlas det som en ny anonym quizrattning.

Visa en kort information vid quizet nar statistik ar aktiv:

```html
<p>Anonyma svar anvands for att forbattra quizet.</p>
```

## 6. Publicera kurswebben

For GitHub Pages:

1. Kontrollera quizet lokalt.
2. Verstall andringarna i Git.
3. Skicka andringarna till GitHub med Push eller Synkronisera andringar.
4. Vanta pa att GitHub Pages har byggt klart.
5. Oppna den publika kurswebben och ratta ett quiz.

Ett fragasvar ska da laggas som en rad i fliken `Svar`.

## 7. Test och felsokning

1. Oppna webbappsadressen i webblasaren. Texten `Quizstatistik ar aktiv.` ska visas.
2. Ratta ett quiz pa den publicerade kurswebben.
3. Kontrollera att en rad per fraga hamnar i `Svar`.
4. Kontrollera att `Vanligaste felsvaren` uppdateras.

Om inga rader kommer in:

- kontrollera att Apps Script-webbappen har atkomst `Alla`
- kontrollera att adressen i JavaScript slutar med `/exec`
- kontrollera att den publicerade kurswebben innehaller den nya JavaScript-koden
- kontrollera att `SHEET_NAME` ar exakt `Svar`

## 8. Andra fragor senare

Du kan andra fragetext, svarsalternativ och ratt svar utan att andra Apps Script eller kalkylarket. Den aktuella fragetexten sparas med varje svar.

Behall ett stabilt `quizId` per kapitel, till exempel `kapitel-1`. Om du gor stora andringar i fragornas ordning ar det bast att valja **Quizstatistik > Tom insamlade svar** innan nasta klass arbetar med quizet. Da blandas inte gammal och ny statistik.

## Integritet

Skicka inte namn, e-postadresser, personnummer, IP-adresser eller andra personuppgifter. Denna losning samlar endast in quizets innehall och anonymt svarsmönster.
