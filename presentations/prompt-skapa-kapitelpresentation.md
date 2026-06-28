# Prompt: skapa en presentation från ett kurskapitel

Skapa en webbaserad presentation till **[KAPITELNUMMER OCH KAPITELRUBRIK]** i kursen **Programmering**.

Utgå från innehållet i kursfilen **[SÖKVÄG TILL KAPITELFILEN]**. Läs hela kapitlet innan du börjar. Presentationen ska följa kapitlets innehåll, begrepp, kodexempel, diagram och övningar. Lägg inte till avancerade moment som inte har förklarats i kursen.

## Arbetsgång

1. Läs hela kapitlet och identifiera:
   - lektionsmål,
   - centrala begrepp,
   - kodexempel,
   - diagram och visuella modeller,
   - övningar,
   - sammanfattning.
2. Läs de närliggande presentationerna och återanvänd projektets befintliga HTML-struktur, CSS-klasser och JavaScript för navigering.
3. Skapa presentationen som **[ÖNSKAT FILNAMN]**.
4. Lägg till presentationen på rätt plats i presentationsindexet.
5. Validera HTML och JavaScript efter ändringen.

## Pedagogiska krav

- Förklara en huvudidé per slide.
- Dela upp svåra moment i små steg och visa ett steg i taget.
- Använd korta, tydliga meningar på svenska.
- Förklara vad koden gör och varför den behövs.
- Förutsätt inte att eleverna förstår ett nytt begrepp innan det har förklarats.
- Introducera enklare exempel före mer avancerade exempel.
- Använd samma terminologi genom hela presentationen.
- Ta med kontrollfrågor där eleverna får tänka innan svaret visas.
- Undvik onödig text, upprepningar och allmänna formuleringar som inte hjälper förståelsen.

## Kodexempel

- Om kapitlet innehåller ett komplett program ska hela programmet visas tidigt i presentationen.
- Om programmet är för långt för en slide ska det visas i flera tydligt märkta delar, exempelvis **Hela programmet – del 1 av 3**.
- Förklara sedan programmets delar steg för steg på efterföljande slides.
- Visa både koden och vad den ger för resultat när utskriften är viktig för förståelsen.
- Förklara viktiga rader, parametrar, returvärden, variabler och metodanrop.
- Ändra inte kodens funktion eller innebörd utan en tydlig pedagogisk anledning.
- Kodblock ska vara tillräckligt stora för att läsas från en projektor.

## Diagram och visuella exempel

- Ta med relevanta diagram från kapitlet.
- Använd Mermaid när kursen använder Mermaid eller när diagrammet blir tydligare med Mermaid.
- Diagram ska återge relationer, riktningar, pilar, symboler och etiketter korrekt.
- Kontrollera att diagrammen faktiskt renderas och syns i presentationen.
- Nämn inte verktyget Mermaid i elevtexten. Förklara diagrammets innehåll i stället.

## Interaktiva moment

- Om kapitlet innehåller en interaktiv simulering ska den även finnas i presentationen när den hjälper förståelsen.
- Simuleringen ska fungera, inte bara visas som en bild.
- Klick på knappar, textfält och andra kontroller får inte samtidigt byta slide.
- Visa gärna stegvis vad som händer i koden när användaren interagerar.
- Använd samma exempel och resultat som i kapitlet.

## Presentationens struktur

Anpassa antalet slides efter innehållet. Använd denna ordning när den passar:

1. Titel och kapitelnummer.
2. Lektionsmål.
3. Varför området behövs.
4. Centrala begrepp.
5. Hela kodexemplet eller en tydlig helhetsbild.
6. Stegvis förklaring av varje del.
7. Resultat, utskrift eller visuellt flöde.
8. Vanliga fel och missförstånd.
9. Interaktiv simulering eller kontrollfråga.
10. Övning och tydlig arbetsordning.
11. Sammanfattning med det viktigaste att komma ihåg.

## Navigering

Använd projektets gemensamma presentationsskript.

- Högerpil, mellanslag eller vänsterklick visar nästa fragment eller nästa slide.
- Vänsterpil går tillbaka ett fragment eller en slide.
- Navigeringen ska loopa:
  - bakåt från första sliden går till sista sliden,
  - framåt från sista sliden går till första sliden.
- Aktuell slide och totalt antal slides ska visas.
- Varje nytt innehållssteg ska använda projektets fragmentfunktion.

## Visuella krav

- Följ exakt samma visuella stil som de befintliga presentationerna.
- Använd ljus bakgrund, hög kontrast och stora lättlästa texter.
- Undvik att lägga för mycket innehåll på samma slide.
- Säkerställ att rubriker, kod och listor ryms på både vanliga och mindre skärmar.
- Skapa inte nya CSS-regler om befintliga klasser löser behovet.
- Om nya regler krävs ska de vara återanvändbara och responsiva.

## Kvalitetskontroll

Kontrollera före avslut att:

- presentationen stämmer med kapitlet,
- alla begrepp förklaras innan de används,
- hela viktiga kodexempel finns med,
- kodens utskrift visas där den behövs,
- diagram har korrekta pilar och relationer,
- interaktiva funktioner fungerar,
- inga element överlappar eller hamnar utanför skärmen,
- presentationen är länkad i presentationsindexet,
- HTML och JavaScript är syntaktiskt korrekta,
- navigeringen fungerar framåt, bakåt och loopar i båda riktningarna.

Genomför arbetet direkt. Avsluta med en kort sammanfattning av vad som skapades, antal slides och vilka kontroller som genomfördes.
