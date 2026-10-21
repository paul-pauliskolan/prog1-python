# Aktivera automatisk insamling för testprov 1–7

Kalkylarket **Quizstatistik Programmering 1** har fliken `Testprov 1-7` med kolumnerna:

```text
Tid | Förnamn | Behöver öva på | Rekommenderad repetition
```

Testprovet skickar bara dessa fyra uppgifter. Det skickar inte poäng, enskilda svar eller fullständigt namn.

## Uppdatera Apps Script

1. Öppna kalkylarket `Quizstatistik Programmering 1`.
2. Välj **Tillägg > Apps Script**.
3. Leta upp funktionen `doPost(e)` i `Code.gs`.
4. Lägg in följande block direkt efter raden `const data = JSON.parse(e.postData.contents);` och före kontrollen av `data.answers`:

```js
  if (data && data.type === "testSummary") {
    const safeText = (value, maxLength) => {
      let text = String(value || "").trim().slice(0, maxLength);
      if (/^[=+\-@]/.test(text)) text = "'" + text;
      return text;
    };

    const firstName = safeText(data.studentName, 50);
    const practiceAreas = safeText(data.practiceAreas, 1500);
    const recommendations = safeText(data.recommendations, 2000);

    if (!firstName || !practiceAreas) {
      return ContentService.createTextOutput("Förnamn eller repetitionsområde saknas.");
    }

    const summarySheet = SpreadsheetApp
      .openById(SPREADSHEET_ID)
      .getSheetByName("Testprov 1-7");

    if (!summarySheet) {
      return ContentService.createTextOutput("Fliken Testprov 1-7 saknas.");
    }

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      summarySheet.appendRow([
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
```

Den färdiga början av funktionen ska alltså se ut så här:

```js
function doPost(e) {
  const data = JSON.parse(e.postData.contents);

  if (data && data.type === "testSummary") {
    // Blocket ovan ska ligga här.
  }

  if (!data || !Array.isArray(data.answers) || !data.answers.length) {
    return ContentService.createTextOutput("Inga svar att spara.");
  }

  // Den befintliga quizkoden fortsätter här.
}
```

## Publicera den nya skriptversionen

1. Spara skriptet.
2. Välj **Implementera > Hantera implementeringar**.
3. Redigera den aktiva webbappen.
4. Välj **Ny version** och klicka på **Implementera**.
5. Behåll inställningarna **Kör som: Jag** och **Åtkomst: Alla**.

Webbappsadressen ska fortsätta vara samma `/exec`-adress. När en elev lämnar in testprovet skapas därefter automatiskt en rad i fliken `Testprov 1-7`.

## Kontroll

Gör ett testprov med förnamnet `Testelev`. Efter rättningen ska kalkylarket få en ny rad med tid, förnamn, repetitionsområde och rekommenderad repetition. Ta sedan bort testraden manuellt.
