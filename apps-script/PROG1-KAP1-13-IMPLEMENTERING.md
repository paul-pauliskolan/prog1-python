# Implementering – nytt testprov kapitel 1–13

Kontrollerat 2026-11-10. Detta dokument ersätter inte gamla installationsanvisningar eller gamla prov.

- Apps Script-projekt: `1f3m7mnpqgZjKurY_i8w0T22XGYpQNAZlUvWM5zYrryuAl4MezhlrWgi1` (Quiz Prog 1).
- Kalkylark i den lästa arbetskoden: `1yOomIA71hwPQGVFRww6OgF5Arm2Vym79y2sZ7_Fk9P4`.
- Originalprovets aktiva implementerings-ID matchades i **Hantera implementeringar**: `AKfycbwdlGtmCrbMTOC_ZDc5tmCt3bZ1tX9Db0suTtQpE9tasnLDGpTRo9NQz1kj3LtwqC81wA`.
- Version 4 ersattes på **denna implementering** med version 5 den 10 november 2026 kl. 10.24 svensk tid. `/exec`-adressen behölls; köridentitet och befintlig åtkomst ändrades inte.
- Kopia av den uppdaterade koden: `prog1-testprov-routing.gs`.
- `setupTestSheets` kördes och slutfördes. Funktionen skapar bara saknade flikar, och hoppar över befintliga.

## Routing och dataminimering

| testId | Resultatflik |
| --- | --- |
| `kapitel-1-7-n4q8x2` | `Testprov 1-7` |
| `kapitel-1-13-v8m3q6` | `Testprov 1-13 v8m3q6` |

Saknat testId behåller bakåtkompatibel routing till det gamla provet. Okända test-ID:n avvisas. Anonyma kapitelquiz och deras tidigare kod behålls. Andra aktiva implementeringar har inte publicerats om.

Det nya provets flik har sheetId `1854671891` och exakt fyra kolumner:

`Tid | Förnamn | Antal rätt | Rekommenderad repetition`

Ingen enskild elevsvarsdata skickas av det nya provet. JSON innehåller `type`, `testId`, `studentName`, `score`, `total`, `percent`, `recommendations` och `pagePath`. POST använder `text/plain;charset=utf-8`.

Kalkylarkets befintliga tidszon är `Etc/GMT` (UTC). Den har behållits. Datum i elevens resultatfil visas med svensk datumformatering i elevens webbläsare.

## Verklig kontroll

Lokalt elevflöde skickade `TEST-v8m3q6-20261110`, 5 rätt av 20. Faktisk rad A2:D2 lästes via Google Sheets efter sändning och granskades visuellt. Tre konkreta repetitionsråd fanns i D2. Därefter lästes raden på nytt, dess testnamn och poäng kontrollerades och **endast rad 2** togs bort. Efterkontroll av A1:D3 visade enbart rubrikerna.

`no-cors` ger inget sparandekvitto till elevsidan. Sidans meddelande säger därför uttryckligen att lagring hos Google inte kan bekräftas där. Den faktiska Google-raden, inte fetch-löftet, var beviset i kontrollen.

## Publik slutkontroll

- Publicerad provadress: https://paul-pauliskolan.github.io/prog1-python/p1-kapitel-1-13-testprov-v8m3q6.html
- Publicerad bedömningsguide: https://paul-pauliskolan.github.io/prog1-python/Programmering-1-testprov-kapitel-1-13-bedomningsguide-v8m3q6.md
- Båda publika filerna hämtades med lyckat HTTP-svar och jämfördes byte för byte med projektfilerna.
- Alla 20 frågor genomfördes även på den publika adressen med A valt: väntade 5/20 (25 %).
- Den faktiska Google-raden med testnamnet `TEST-PUBLIK-v8m3q6`, 5 rätt och tre repetitionsråd kontrollerades. Endast denna testrad togs därefter bort.
- Knappen Kopiera sammanfattning gav bekräftelse i webbläsaren.
- Den verkligt nedladdade publika MD-filen kontrollerades: förnamn, datum, resultat och 15 felgenomgångar med förklaringar.
- Förnamnskrav, stopp vid obesvarad fråga, Föregående/Nästa och bibehållet radioval kontrollerades i webbläsaren.
- Mobilvy 390 × 844 och tangentbord (Tab, Enter, Space) kontrollerades. Tillfällig viewport återställdes.
- localStorage återlästes efter omladdning: senaste resultat 5/20, 25 %.
- Automatiskt: 1 000 slumpningar med exakt fem korrekta alternativ per A–D; korrekt facit, unika frågor, rättning 20/20 och 10/20, obligatoriska uppgifter, högst tre råd, full MD, lokal lagring och exakt JSON-format. Apps Script-routning för gamla, nya, saknade och okända test-ID:n testades med mockade Google-tjänster.
- Originalprovets HTML och navigationsfiler ändrades inte. Tidigare lokala ändringar i `APPS-SCRIPT-TESTPROV-1-7.md` lämnades utanför commit och publicering.

Kör automatiska kontroller enligt `tests/README.md`. Inga kända återstående hinder för användning som repetitionsstöd.
