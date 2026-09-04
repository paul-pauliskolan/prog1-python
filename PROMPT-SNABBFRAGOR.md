# Prompt: skapa snabbfrågor till en kurswebbplats

Den här prompten kan användas när du vill be en AI-kodassistent att skapa ett liknande system med muntliga snabbfrågor i en annan kurs. Kopiera texten under rubriken **Färdig prompt** och ersätt informationen inom hakparenteser.

## Förberedelser

Ta fram följande information innan du använder prompten:

- kursens namn;
- sökvägen till kursens projektmapp;
- vilka kapitel som ska ingå;
- var kapitlens HTML- eller Markdown-filer finns;
- var länken till snabbfrågorna ska placeras;
- hur många frågor varje kapitel ska innehålla;
- om kurswebbplatsen redan har stöd för ljust och mörkt tema.

AI-assistenten ska i första hand skapa frågorna utifrån kursens befintliga innehåll. Skicka därför med projektmappen eller ge assistenten åtkomst till kapitelfilerna. Då blir terminologi, svårighetsgrad och kodexempel konsekventa med kursen.

## Färdig prompt

```text
Skapa ett komplett system med muntliga snabbfrågor till kurswebbplatsen [KURSENS NAMN].

Projektet finns i [SÖKVÄG TILL PROJEKTMAPPEN]. Läs först projektets instruktioner och undersök den befintliga strukturen, designen och navigeringen. Bevara befintlig funktionalitet och ändra inte filer som saknar koppling till uppgiften.

Källmaterial

Skapa frågorna utifrån innehållet i följande kapitel:

- [KAPITELNUMMER]: [KAPITELNAMN] – [SÖKVÄG TILL KAPITELFIL]
- [KAPITELNUMMER]: [KAPITELNAMN] – [SÖKVÄG TILL KAPITELFIL]
- [KAPITELNUMMER]: [KAPITELNAMN] – [SÖKVÄG TILL KAPITELFIL]

Skapa [ANTAL] frågor per kapitel. Frågorna ska testa de viktigaste begreppen och färdigheterna i respektive kapitel. Använd endast kunskaper som behandlas i källmaterialet. Formulera korta frågor som fungerar för muntlig repetition i klassrummet. Svaren ska vara tydliga, korrekta och begripliga utan onödig fackjargong. Lägg till ett kort kodexempel när det hjälper eleven att förstå svaret.

Önskad struktur

Skapa en mapp med namnet `snabbfragor` i webbplatsens rot. Systemet ska innehålla:

1. `snabbfragor/index.html` – en samlingssida där eleven kan välja:
   - ett enskilt kapitel;
   - alla frågor i slumpmässig ordning.
2. En separat HTML-sida för varje kapitel, exempelvis `kap-2-1.html`.
3. `snabbfragor/slumpfragor.html` – en sida som blandar frågor från samtliga valda kapitel.
4. `snabbfragor/snabbfragor.css` – gemensam, responsiv formgivning.
5. `snabbfragor/snabbfragor.js` – styrning av kapitelvisa frågor och facit.
6. `snabbfragor/slumpfragor.js` – frågebank och logik för slumpfrågorna.

Samlingssidan

Samlingssidan ska ha rubriken "Välj frågeläge" och visa tydliga klickbara kort. Det första kortet ska heta "Slumpade frågor" och ange det totala antalet frågor. Därefter ska varje kapitel ha ett eget kort med:

- kapitelnummer;
- kapitelrubrik;
- antal frågor.

Det ska finnas en tydlig länk tillbaka till kursens startsida.

Kapitelvisa snabbfrågor

Varje kapitel ska ha [ANTAL] frågor. Visa en fråga i taget i stor, lättläst stil. Varje fråga ska följas av ett separat facitläge. Eleven ska först hinna tänka och sedan kunna visa facit.

Varje fråga ska innehålla:

- kapitelnummer och frågenummer;
- själva frågan;
- texten "Tänk på svaret först. Tryck sedan på mellanslag för att visa facit."

Varje facit ska innehålla:

- ett kort och direkt svar;
- ett relevant kodexempel om ämnet lämpar sig för det;
- högst en kort förklaring efter kodexemplet.

Visa aktuell position, exempelvis "Fråga 2 av 5" eller "Facit 2 av 5". Lägg till knappar för föregående och nästa bild. Stöd även följande tangentbordskommandon:

- mellanslag: visa facit eller gå vidare;
- högerpil: gå vidare;
- vänsterpil: gå tillbaka.

När eleven lämnar sista facitbilden ska sidan gå tillbaka till samlingssidan.

Slumpade frågor

Sidan med slumpfrågor ska visa en fråga i taget i en tydlig ruta. Den ska innehålla:

- kapitlet som frågan kommer från;
- aktuell position och totalt antal frågor;
- frågan;
- en knapp med texten "Visa facit";
- facit och eventuellt kodexempel;
- en knapp med texten "Nästa slumpfråga".

Blanda hela frågebanken med en korrekt Fisher–Yates-blandning. Ingen fråga får upprepas innan samtliga frågor har visats. När alla frågor är klara ska knappen erbjuda användaren att blanda om frågorna och börja om.

Mellanslag ska visa facit när frågan visas och gå till nästa fråga när facit visas. Flytta fokus på ett tillgängligt sätt mellan knapparna.

Design och tillgänglighet

Anpassa utseendet till kurswebbplatsens befintliga färger, typsnitt och komponenter. Om webbplatsen redan har ljust och mörkt tema ska snabbfrågorna använda samma temalösning.

Följ dessa krav:

- använd semantisk HTML;
- sätt dokumentets språk till svenska;
- lägg till relevanta `meta`-beskrivningar och unika sidtitlar;
- använd synliga fokusmarkeringar;
- ge knappar begripliga texter och `aria-label` där det behövs;
- använd `aria-live` sparsamt för information som ändras;
- gör layouten användbar på mobil, surfplatta och dator;
- respektera `prefers-reduced-motion`;
- använd inte externa ramverk om projektet inte redan kräver dem;
- skriv inga frågor eller facit direkt med `innerHTML`; använd `textContent` för dynamiskt innehåll.

Länk från kursens startsida

Lägg en länk med texten "Öppna samlingssidan med snabbfrågor" direkt efter [BEFINTLIG LÄNK ELLER SEKTION]. Länken ska peka på `snabbfragor/index.html`, alltså samlingssidan där eleven väljer kapitel eller slumpade frågor. Lägg inte länken direkt till sidan med slumpfrågor.

Innehållskvalitet

Frågorna ska tillsammans ge god täckning av varje kapitels centrala innehåll. Undvik:

- flera frågor som testar exakt samma sak;
- ja/nej-frågor utan krav på förklaring;
- frågor om detaljer som inte finns i kapitlet;
- onödigt långa frågor eller svar;
- vilseledande eller syntaktiskt felaktiga kodexempel;
- begrepp som introduceras först i senare kapitel.

Använd svenska tecken och kursens egen terminologi. Kontrollera särskilt att kodexemplens indrag, parenteser, citattecken och variabelnamn är korrekta.

Kontroll före leverans

När implementationen är klar ska du:

1. kontrollera att samlingssidan länkar till alla kapitelsidor och till sidan med slumpfrågor;
2. kontrollera att alla länkmål och CSS- och JavaScript-filer finns;
3. räkna frågorna och facitdelarna på varje kapitelsida;
4. kontrollera att den slumpade frågebanken innehåller samma antal frågor som kapitelsidorna tillsammans;
5. syntaxkontrollera all JavaScript-kod;
6. kontrollera HTML-strukturen och leta efter trasiga relativa sökvägar;
7. testa knappar, mellanslag och piltangenter;
8. testa att frågorna inte upprepas innan hela frågebanken är genomgången;
9. kontrollera mobil layout samt ljust och mörkt tema;
10. redovisa vilka filer som skapats, ändrats eller tagits bort.

Gör ändringarna direkt i projektet. Skapa inte någon commit och publicera inte webbplatsen om jag inte uttryckligen ber om det.
```

## Exempel på ifylld kapitelinformation

```text
Kurs: Webbutveckling 1

- 2.1: HTML-dokumentets struktur – chapters/chapter-2-1.html
- 2.2: Text, länkar och bilder – chapters/chapter-2-2.html
- 2.3: Introduktion till CSS – chapters/chapter-2-3.html

Skapa fem frågor per kapitel.
Placera länken till samlingssidan direkt efter länken "Öppna kursens presentationer".
```

## Rekommenderad mappstruktur

```text
kursens-rot/
├── index.html
├── js/
│   └── theme.js
└── snabbfragor/
    ├── index.html
    ├── kap-2-1.html
    ├── kap-2-2.html
    ├── kap-2-3.html
    ├── slumpfragor.html
    ├── snabbfragor.css
    ├── snabbfragor.js
    └── slumpfragor.js
```

## Möjliga tillägg

Följande krav kan läggas till i prompten vid behov:

- filtrering så att flera valda kapitel kan blandas;
- möjlighet att markera frågor som lätta eller svåra;
- sparad progression med `localStorage`;
- knapp för att börja om från början;
- helskärmsläge för visning på projektor;
- utskriftsvänlig sammanställning av frågor och facit;
- möjlighet att läsa frågebanken från en gemensam JSON-fil för att undvika dubblerat innehåll.

Om snabbfrågorna ska underhållas ofta är en gemensam JSON-fil den bästa fortsatta förbättringen. Då kan både kapitelsidorna och slumpfrågorna hämta sitt innehåll från samma frågebank.
