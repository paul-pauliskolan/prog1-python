# Mall: skapa dolt testprov med elevåterkoppling och Google Sheets

Den här filen är en komplett uppdragsmall som kan återanvändas i kurserna **Webbutveckling 1**, **Teknik 1** och **Programmering 2**. Klistra in hela filens innehåll i Codex när ett nytt testprov ska skapas.

---

## Uppdrag till Codex

Skapa ett nytt, separat och olistat testprov för en av följande kurser:

- Webbutveckling 1;
- Teknik 1;
- Programmering 2.

### Obligatoriska frågor innan arbetet börjar

Börja alltid med att fråga mig:

1. **Vilken kurs gäller provet?**
2. **Vilka kapitel eller avsnitt ska provet utgå från?**
3. **Hur många frågor ska provet innehålla?** Föreslå 20 frågor om jag inte anger något annat.
4. **Vilket Google-kalkylark ska ta emot resultaten?** Be om länken eller kalkylarkets ID om det inte redan finns i projektet.
5. **Vad ska fliken för just detta prov heta?** Föreslå ett tydligt namn utifrån kurs och kapitel.

Fråga inte om uppgifter som redan framgår tydligt av mitt svar eller projektet. Börja inte skapa frågor förrän kursen och kapitlen/avsnitten är fastställda.

## Viktiga avgränsningar

- Ändra inte befintligt kursmaterial, befintliga prov eller befintliga frågor.
- Skapa nya filer för varje nytt prov.
- Ta inte bort eller skriv över gamla provresultat.
- Lägg inte till provet i webbplatsens navigation, startsida, sitemap, sökfunktion eller synliga listor.
- Samla bara in elevens förnamn, antal rätt och rekommenderad repetition.
- Samla inte in efternamn, e-postadress, personnummer, fritextsvar eller andra personuppgifter.
- Ett enskilt resultat är ett ögonblicksmått och ska inte beskrivas som permanent behärskning eller automatisk betygssättning.

## Läs in kursmaterialet

1. Leta upp och läs projektets instruktioner och relevanta kursfiler.
2. Identifiera de kapitel eller avsnitt som jag har angett.
3. Kartlägg lärandemål, centrala begrepp, exempel, övningar och eventuella frågebanker.
4. Kontrollera om webbplatsen redan har en gemensam design, quizkod eller resultatinsamling som ska återanvändas.
5. Redovisa kort vilka kapitel, kunskapsområden och källfiler som provet kommer att bygga på.

## Provets innehåll

Skapa nya frågor som testar samma kunskapsmål och ungefärliga svårighetsgrad som kursmaterialet, men kopiera inte befintliga frågor ordagrant. Ändra exempel, värden, formuleringar, situationer och variabelnamn.

Anpassa frågetyperna till kursen.

### Webbutveckling 1

Blanda exempelvis:

- HTML-struktur och semantik;
- CSS, selektorer, layout och responsiv design;
- tillgänglighet;
- felsökning av HTML och CSS;
- grundläggande JavaScript om det ingår i de valda kapitlen;
- publicering, standarder, juridik eller säkerhet när kursmaterialet behandlar detta;
- kodförståelse och val av lämplig lösning.

### Teknik 1

Blanda exempelvis:

- teknikutvecklingsprocessen;
- behov, krav och målgrupp;
- skisser, modeller och dokumentation;
- material, konstruktion och tillverkning;
- hållbar utveckling och konsekvensanalys;
- tekniska system;
- problemlösning, rimlighetsbedömning och tillämpning.

### Programmering 2

Blanda exempelvis:

- objektorientering, klasser och objekt;
- arv, polymorfism och inkapsling när detta ingår;
- funktioner/metoder, parametrar och returvärden;
- datastrukturer och algoritmer;
- filhantering och undantag;
- kodförståelse;
- felsökning;
- val av lämplig lösning;
- resonemang om kodkvalitet, struktur och testning.

## Frågekvalitet

- Fördela frågorna rimligt mellan de valda kapitlen.
- Blanda begrepp, förståelse, felsökning, tillämpning och resonemang.
- Använd trovärdiga distraktorer som motsvarar vanliga missuppfattningar.
- Undvik ledtrådar som ovanligt långa rätta svar eller grammatiska skillnader.
- Kontrollera att exakt ett alternativ är rätt i varje fråga.
- Skapa en kort saklig förklaring till varje rätt svar.
- Koppla varje fråga till kapitel/avsnitt och kunskapsområde.

## Slumpning

Vid varje start och varje omladdning ska:

1. frågornas ordning slumpas;
2. svarsalternativen inom varje fråga slumpas;
3. rätt svar fortfarande rättas mot rätt alternativ efter slumpningen;
4. de rätta alternativen fördelas balanserat mellan position A, B, C och D.

För ett prov med 20 frågor ska exakt fem rätta svar ligga på vardera positionen A, B, C och D, men i slumpmässig ordning. För andra frågeantal ska fördelningen vara så jämn som möjligt.

Testa slumpningen upprepade gånger automatiskt. Kontrollera att rätt svar aldrig tappas bort och att inte alla rätta svar hamnar på samma position.

## Separat och olistad HTML-fil

Skapa provet som en ny HTML-fil i den befintliga webbplatsen.

- Använd ett nytt svårgissat men begripligt filnamn, till exempel `webb1-kapitel-2-5-testprov-k7m4.html`.
- Återanvänd aldrig ett gammalt provs filnamn.
- Följ webbplatsens färger, typografi och responsiva layout.
- Provet ska fungera på dator, surfplatta och mobil.
- Alla funktioner ska kunna användas med tangentbord.
- Filen får inte länkas från webbplatsens synliga delar.
- Informera om att en olistad adress inte är samma sak som lösenordsskydd.

## Elevflöde

Provet ska:

1. kräva att eleven anger sitt **förnamn** innan provet startar;
2. visa en fråga i taget;
3. kräva svar på alla frågor före inlämning;
4. inte visa rätt svar innan hela provet lämnats in;
5. visa antal och andel rätt efter inlämning;
6. visa felaktiga frågenummer;
7. visa kapitel/avsnitt för varje fel;
8. ge en kort förklaring till varje felaktigt svar;
9. ge konkreta repetitionsråd för högst tre prioriterade områden;
10. spara det senaste resultatet lokalt med `localStorage`;
11. automatiskt skicka lärarsammanfattningen till Google Sheets;
12. kunna skapa en komplett individuell Markdown-fil för eleven.

Resultatsidan ska ha följande knappar:

- **Ladda ner allt i MD-fil**;
- **Kopiera sammanfattning**.

Lägg inte till knapparna **Gör om provet** eller **Skriv ut resultat**.

## Elevens Markdown-fil

Filnamnet ska innehålla elevens förnamn, exempelvis:

`resultat-sara-webbutveckling-1.md`

MD-filen ska innehålla:

- elevens förnamn;
- datum;
- antal och andel rätt;
- kort sammanfattning;
- prioriterade kapitel eller avsnitt;
- konkreta repetitionsaktiviteter;
- felaktiga frågor;
- elevens svar;
- rätt svar;
- kort förklaring;
- rekommenderat nästa steg.

## Lärarens Google Sheet

Varje testprov ska ha en egen flik. Fliken ska endast innehålla följande fyra kolumner:

| Tid | Förnamn | Antal rätt | Rekommenderad repetition |
|---|---|---:|---|

Krav:

- frys rubrikraden;
- använd filter på rubrikraden;
- använd tydlig rubrikformatering;
- centrera **Antal rätt**;
- radbryt repetitionskolumnen;
- skicka inga enskilda elevsvar till lärarfliken;
- skapa aldrig två kolumner som säger nästan samma sak, exempelvis både `Behöver öva på` och `Rekommenderad repetition`.

## Data som HTML-provet ska skicka

Använd följande JSON-struktur:

```js
{
  type: "testSummary",
  testId: "[UNIKT_TEST_ID]",
  studentName: studentName,
  score: score,
  total: total,
  percent: percent,
  recommendations: recommendations,
  pagePath: window.location.pathname
}
```

Använd `Content-Type: text/plain;charset=utf-8` och samma fungerande Apps Script-URL som konfigurerats för webbplatsen. Skicka inte fältet `practiceAreas`.

## Komplett Apps Script

Koden nedan kan ersätta hela `Code.gs`. Den stödjer flera kurser och testprov i samma kalkylark. Den behåller även stöd för den äldre anonyma quizinsamlingen.

Innan koden används ska platshållarna i `SPREADSHEET_ID` och `TEST_SHEETS` ändras.

```js
const SPREADSHEET_ID = "[KALKYLARKETS_ID]";
const ANSWERS_SHEET_NAME = "Svar";

const TEST_SHEETS = {
  "[UNIKT_TEST_ID]": "[FLIKNAMN]",
  // Exempel på ytterligare prov:
  // "webb1-kapitel-2-5-k7m4": "Webb 1 – kapitel 2–5",
  // "teknik1-kapitel-1-3-r8p2": "Teknik 1 – kapitel 1–3",
  // "prog2-kapitel-4-7-v6n9": "Prog 2 – kapitel 4–7",
};

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Quizstatistik")
    .addItem("Skapa eller kontrollera testflikar", "setupTestSheets")
    .addToUi();
}

function safeText(value, maxLength) {
  let text = String(value || "").trim().slice(0, maxLength);
  if (/^[=+\-@]/.test(text)) text = "'" + text;
  return text;
}

function setupTestSheets() {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);

  Object.values(TEST_SHEETS).forEach((sheetName) => {
    let sheet = spreadsheet.getSheetByName(sheetName);
    if (!sheet) sheet = spreadsheet.insertSheet(sheetName);

    sheet.getRange("A1:D1").setValues([[
      "Tid",
      "Förnamn",
      "Antal rätt",
      "Rekommenderad repetition",
    ]]);

    sheet.setFrozenRows(1);
    sheet.getRange("A1:D1")
      .setFontWeight("bold")
      .setFontColor("#ffffff")
      .setBackground("#137a4a")
      .setHorizontalAlignment("center");

    sheet.setColumnWidth(1, 150);
    sheet.setColumnWidth(2, 140);
    sheet.setColumnWidth(3, 110);
    sheet.setColumnWidth(4, 520);
    sheet.getRange("C2:C").setHorizontalAlignment("center");
    sheet.getRange("D2:D").setWrap(true);

    if (!sheet.getFilter()) {
      sheet.getRange(1, 1, Math.max(sheet.getMaxRows(), 2), 4).createFilter();
    }
  });
}

function doGet() {
  return ContentService.createTextOutput(
    "Quizstatistik och testprovsinsamling är aktiv.",
  );
}

function saveTestSummary(data) {
  const testId = safeText(data.testId, 100);
  const sheetName = TEST_SHEETS[testId];
  const firstName = safeText(data.studentName, 50);
  const score = Math.max(0, Number(data.score) || 0);
  const recommendations = safeText(data.recommendations, 2000);

  if (!sheetName) {
    return ContentService.createTextOutput("Okänt test-ID.");
  }
  if (!firstName || !recommendations) {
    return ContentService.createTextOutput(
      "Förnamn eller repetitionsrekommendation saknas.",
    );
  }

  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID)
    .getSheetByName(sheetName);
  if (!sheet) {
    return ContentService.createTextOutput("Testfliken saknas.");
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

## Så ska Apps Script och Google Sheets ändras för ett nytt prov

### 1. Bestäm ett unikt test-ID

Skapa ett stabilt ID med kurs, kapitel och en kort slumpkod, exempelvis:

`webb1-kapitel-2-5-k7m4`

Samma ID måste användas i HTML-provet och i `TEST_SHEETS`.

### 2. Lägg till provet i TEST_SHEETS

Öppna kalkylarket och välj **Tillägg > Apps Script**. Lägg till en ny rad i objektet:

```js
const TEST_SHEETS = {
  "webb1-kapitel-2-5-k7m4": "Webb 1 – kapitel 2–5",
  "teknik1-kapitel-1-3-r8p2": "Teknik 1 – kapitel 1–3",
};
```

Ta inte bort de gamla raderna. Varje gammalt prov behöver behålla sin koppling.

### 3. Skapa eller kontrollera fliken

1. Spara skriptet.
2. Välj funktionen `setupTestSheets` i funktionslistan.
3. Klicka **Kör**.
4. Godkänn behörigheten om Google frågar.
5. Kontrollera att fliken har kolumnerna `Tid`, `Förnamn`, `Antal rätt` och `Rekommenderad repetition`.

### 4. Publicera en ny webbappsversion

Att bara spara koden räcker inte.

1. Klicka **Implementera > Hantera implementeringar**.
2. Klicka på pennan vid den aktiva webbappen.
3. Välj **Ny version**.
4. Behåll **Kör som: Jag**.
5. Behåll den åtkomstnivå som redan används för eleverna.
6. Klicka **Implementera**.
7. Kontrollera att `/exec`-adressen är densamma som tidigare.

### 5. Koppla HTML-provet

- Ange samma `testId` som i `TEST_SHEETS`.
- Ange den publicerade `/exec`-adressen som endpoint.
- Skicka endast `studentName`, `score`, `total`, `percent`, `recommendations`, `testId` och `pagePath`.

### 6. Funktionstest

1. Skicka ett tillfälligt testresultat med ett tydligt testnamn, exempelvis `KodexTest`.
2. Kontrollera att det hamnar på rätt flik.
3. Kontrollera att **Antal rätt** är ett tal.
4. Kontrollera att rekommendationen innehåller relevanta kapitel och konkreta övningar.
5. Ta bort endast den tillfälliga testraden.
6. Testa därefter provet i webbläsaren från start till färdigt resultat.

## Bedömningsguide

Skapa också en separat MD-fil för läraren med ett nytt filnamn, exempelvis:

`[kurs]-testprov-[kapitel]-bedomningsguide.md`

Den ska innehålla:

1. provöversikt och version;
2. valda kapitel/avsnitt och frågefördelning;
3. facit med korta förklaringar;
4. feldiagnos fråga för fråga;
5. vanliga missuppfattningar utan formuleringar om personliga egenskaper;
6. rekommenderad repetition per kapitel;
7. nya kontrollfrågor som inte är identiska med provfrågorna;
8. poängintervall som stöd för återkoppling, inte automatisk betygssättning.

## Kontroll före publicering

Kontrollera automatiskt och manuellt att:

- alla frågor har exakt ett rätt svar;
- frågornas och alternativens ordning slumpas;
- rättningslogiken följer det rätta alternativet efter slumpningen;
- rätta svar är balanserade mellan A–D;
- alla frågor måste besvaras;
- förnamn är obligatoriskt;
- antal rätt visas och skickas korrekt;
- endast en repetitionskolumn används i Sheets;
- elevens MD-fil innehåller fullständig individuell återkoppling;
- inga gamla filer, prov, flikar eller resultat har skrivits över;
- provfilen inte är länkad från webbplatsens synliga delar;
- HTML, JavaScript och Apps Script saknar syntaxfel;
- mobilvy och tangentbordsnavigering fungerar.

## Leverans

När arbetet är klart ska du lämna:

- kurs och kapitel/avsnitt som provet bygger på;
- antal frågor och frågefördelning;
- exakt HTML-filnamn;
- exakt olistad webbadress;
- bedömningsguidens MD-fil;
- länk till Google-kalkylarket och rätt flik;
- använt `testId`;
- bekräftelse på att Apps Script har publicerats i en ny version;
- bekräftelse på att ett testresultat nådde rätt flik och att testraden togs bort;
- kort instruktion för hur nästa prov läggs till utan att något gammalt skrivs över.

