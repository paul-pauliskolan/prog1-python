const practiceGroups = {
  "1-20": {
    title: "Fråga 1-20",
    subtitle:
      "Grundfrågor på samma nivå som provets första del, med nya exempel och formuleringar.",
    description:
      "Grundfrågor om program, syntax, variabler, datatyper, operatorer, villkor, loopar, listor, funktioner och enkel felhantering.",
    questions: createConceptQuestions(),
  },
  "21-30": {
    title: "Fråga 21-30",
    subtitle:
      "Tillämpningsfrågor där du väljer rimlig lösning, struktur eller arbetssätt.",
    description:
      "Frågor om problemlösning, användarinmatning, struktur, testning, tillgänglighet, projekt, GitHub och dokumentation.",
    questions: createScenarioQuestions(),
  },
  "31-40": {
    title: "Fråga 31-40",
    subtitle:
      "Medelsvåra kodfrågor där du avgör vad ett kort Pythonprogram skriver ut.",
    description:
      "Kodfrågor med variabler, villkor, loopar, listor, funktioner, strängar och try-except.",
    questions: createMediumCodeQuestions(),
  },
  "41-50": {
    title: "Fråga 41-50",
    subtitle:
      "Svårare kodfrågor med flera steg, nästlade strukturer och mer spårning av värden.",
    description:
      "Svårare kodfrågor med loopar, listor, funktioner, villkor, felhantering och sammansatta uttryck.",
    questions: createHardCodeQuestions(),
  },
};

const practiceLinks = [
  ["1-20", "Fråga 1-20"],
  ["21-30", "Fråga 21-30"],
  ["31-40", "Fråga 31-40"],
  ["41-50", "Fråga 41-50"],
];

function makeQuestion(question, correct, wrong, seed = 0, code = "") {
  const orders = [
    [0, 1, 2, 3],
    [1, 0, 2, 3],
    [1, 2, 0, 3],
    [1, 2, 3, 0],
  ];
  const values = [correct, ...wrong];
  const order = orders[seed % orders.length];
  const options = order.map((index) => values[index]);

  return {
    question,
    code,
    options,
    correctIndex: options.indexOf(correct),
    answer: correct,
  };
}

function createConceptQuestions() {
  const items = [
    ["Vad beskriver bäst ett program?", "Instruktioner som datorn kan följa och köra.", ["En plan som bara finns som idé innan kod skrivs.", "En lista med testvärden utan instruktioner.", "En text som förklarar ett problem men inte styr datorn."]],
    ["Vad betyder det att Python har syntaxregler?", "Koden måste följa bestämda skrivregler för att kunna tolkas.", ["Python kan köra kod även om nyckelord stavas nästan rätt.", "Syntax handlar bara om vilka färger editorn visar.", "Syntax används bara när programmet innehåller kommentarer."]],
    ["Vad gör `print()` i ett konsolprogram?", "Visar information för användaren.", ["Läser in text från tangentbordet.", "Skickar tillbaka ett värde från en funktion.", "Kontrollerar om text kan omvandlas till tal."]],
    ["Vad är en variabel i Python?", "Ett namn som pekar på ett värde som programmet kan använda.", ["En kodrad som alltid upprepar sig.", "Ett testfall som visar om koden fungerar.", "En kommentar som förklarar vad en funktion gör."]],
    ["Vilket värde är ett heltal?", "`42`", ["`\"42\"`", "`True`", "`[42]`"]],
    ["Vilket värde är en sträng?", "`\"Maja\"`", ["`17`", "`False`", "`[\"Maja\"]`"]],
    ["Vilket värde passar bäst som boolean?", "`False`", ["`\"False\"`", "`0.5`", "`[False]`"]],
    ["Vad händer normalt när `input()` används?", "Programmet väntar på att användaren skriver något.", ["Programmet skriver ut ett svar utan inmatning.", "Programmet omvandlar automatiskt svaret till heltal.", "Programmet sparar svaret direkt i en fil."]],
    ["Varför används `int()` ibland efter `input()`?", "För att göra textinmatning till ett heltal.", ["För att skriva ut texten tydligare.", "För att skapa en ny lista med siffror.", "För att kontrollera om ett villkor är sant."]],
    ["Vad är en algoritm?", "En stegvis lösning på ett problem.", ["Ett flödesschema i sig, oavsett innehåll.", "En färdig Pythonfil med exakt ett funktionsanrop.", "Ett testvärde som används när programmet körs."]],
    ["Vad är pseudokod?", "En beskrivning av lösningen utan krav på exakt Python-syntax.", ["Kod som alltid kan köras direkt i Python.", "En typ av felmeddelande från terminalen.", "En fil som GitHub använder för versionshistorik."]],
    ["Vad används `==` till i ett villkor?", "Att jämföra om två värden är lika.", ["Att tilldela en variabel ett nytt värde.", "Att kontrollera om två värden är olika.", "Att avsluta en loop."]],
    ["Vad betyder `!=` i ett villkor?", "Inte lika med.", ["Mindre än eller lika med.", "Tilldela inte värdet.", "Upprepa tills värdet ändras."]],
    ["När används `if`?", "När programmet ska välja om kod ska köras beroende på ett villkor.", ["När samma kod alltid ska köras ett bestämt antal gånger.", "När en lista ska få ett nytt värde sist.", "När en funktion ska skicka tillbaka ett värde."]],
    ["Vad gör `elif`?", "Ger möjlighet att pröva fler villkor efter ett `if`.", ["Startar en loop som aldrig tar slut.", "Tar bort ett element ur en lista.", "Fångar alla fel i programmet automatiskt."]],
    ["När passar `else` bäst?", "När kod ska köras om tidigare villkor inte var sanna.", ["När en funktion ska definieras.", "När text ska göras om till ett tal.", "När en lista ska sorteras."]],
    ["Vad används `and` till?", "Att kräva att två villkor är sanna samtidigt.", ["Att välja om minst ett villkor är sant.", "Att lägga ihop två strängar utan plus.", "Att hoppa över nästa varv i en loop."]],
    ["Vad används `or` till?", "Att godkänna om minst ett villkor är sant.", ["Att kräva att båda villkoren är falska.", "Att returnera ett värde från en funktion.", "Att lägga till ett element sist i en lista."]],
    ["Vad gör `not`?", "Vänder ett sant/falskt värde.", ["Gör text till heltal.", "Stoppar ett program direkt.", "Skapar en ny lista."]],
    ["När passar en `for`-loop ofta bra?", "När programmet ska gå igenom flera värden eller ett känt antal varv.", ["När programmet ska vänta tills användaren väljer avsluta.", "När ett fel ska fångas med ett felmeddelande.", "När en funktion ska definieras men inte köras."]],
    ["När passar en `while`-loop ofta bra?", "När upprepningen ska fortsätta så länge ett villkor är sant.", ["När man bara vill köra en kodrad en enda gång.", "När man alltid vill gå igenom exakt tre listvärden.", "När man vill skapa ett textfält i Tkinter."]],
    ["Vad gör `range(5)` i en `for`-loop?", "Ger talen 0 till 4.", ["Ger talen 1 till 5.", "Ger exakt fem textsträngar.", "Ger alltid talen 0 och 5."]],
    ["Vad är en oändlig loop?", "En loop som aldrig når ett stoppvillkor.", ["En loop som går igenom en lista en gång.", "En funktion som returnerar en lista.", "En kommentar som är längre än en kodrad."]],
    ["Vad är en lista?", "En ordnad samling värden.", ["Ett enda textvärde.", "En variabel som bara kan innehålla sant eller falskt.", "En koddel som alltid körs vid fel."]],
    ["Vad betyder index i en lista?", "Positionen för ett värde i listan.", ["Hur många listor programmet har.", "Namnet på listan.", "Vilken datatyp listan måste innehålla."]],
    ["Vad gör `append()`?", "Lägger till ett värde sist i en lista.", ["Lägger till ett värde först i en lista.", "Hämtar listans längd.", "Tar bort alla värden ur listan."]],
    ["Vad gör `len()`?", "Ger längden på till exempel en lista eller sträng.", ["Hämtar alltid första värdet.", "Lägger till ett värde sist.", "Gör text till heltal."]],
    ["Vad är en funktion?", "En namngiven koddel som kan anropas.", ["En variabel som alltid innehåller flera värden.", "En kommentar som beskriver en lösning.", "En loop som körs automatiskt när filen öppnas."]],
    ["Vad är en parameter?", "Ett värde som skickas in till en funktion.", ["Ett värde som alltid skrivs ut med `print()`.", "Ett felmeddelande från `int()`.", "En lista som aldrig ändras."]],
    ["Vad gör `return`?", "Skickar tillbaka ett värde från en funktion.", ["Skriver alltid ut värdet på skärmen.", "Startar om hela programmet.", "Läser in text från användaren."]],
    ["Varför är tydliga variabelnamn viktiga?", "De gör koden lättare att förstå och ändra.", ["De gör att programmet aldrig kan få fel.", "De gör att Python automatiskt testar koden.", "De gör att alla värden blir heltal."]],
    ["Vad är ett syntaxfel?", "Ett fel där koden inte följer språkets skrivregler.", ["Ett fel där programmet kör men räknar fel.", "Ett testfall som ger oväntat svar.", "En kommentar som är svår att förstå."]],
    ["Vad är ett logiskt fel?", "Koden går att köra men ger fel resultat.", ["Python kan inte läsa kodraden alls.", "Programmet saknar alltid variabler.", "En lista innehåller fler än tre värden."]],
    ["Vad är ett exekveringsfel?", "Ett fel som uppstår medan programmet körs.", ["Ett fel som bara finns i pseudokod.", "Ett fel som bara handlar om typsnitt.", "Ett fel som alltid rättas av Python."]],
    ["Vad används `try` och `except` till?", "Att hantera fel som kan uppstå vid körning.", ["Att skapa en ny funktion.", "Att gå igenom en lista.", "Att jämföra om två värden är lika."]],
    ["När kan `ValueError` uppstå?", "När text inte kan omvandlas till den datatyp koden försöker använda.", ["När en lista är för lång.", "När en kommentar saknar punkt.", "När en variabel har ett svenskt namn."]],
    ["Vad är ett GUI?", "Ett grafiskt användargränssnitt.", ["Ett program som bara körs i terminalen.", "En typ av matematisk operator.", "En fil med instruktioner för GitHub."]],
    ["Vad är en `Button` i Tkinter?", "En knapp som kan kopplas till en funktion.", ["Ett textfält där användaren skriver.", "En loop som körs vid fel.", "En fil som sparar projektets historik."]],
    ["Vad är en `Entry` i Tkinter?", "Ett inmatningsfält för kortare text.", ["En knapp som startar programmet.", "En lista med flera val.", "En funktion som automatiskt validerar tal."]],
    ["Vad betyder händelsestyrning?", "Programmet reagerar på händelser som klick eller inmatning.", ["Programmet kör allt i filen exakt en gång och avslutas.", "Programmet saknar användare.", "Programmet kan bara använda `print()`."]],
    ["Vad betyder validering av inmatning?", "Att kontrollera att användarens inmatning är rimlig innan den används.", ["Att alltid omvandla all text till noll.", "Att ta bort alla felmeddelanden.", "Att spara alla svar i README."]],
    ["Vad innebär tillgänglighet i ett program?", "Att programmet blir lättare att använda för fler personer.", ["Att programmet alltid måste vara anslutet till internet.", "Att all information bara visas med färger.", "Att inga felmeddelanden ska visas."]],
    ["Vad är Git?", "Ett verktyg för versionshantering.", ["Ett Pythonbibliotek för GUI.", "En operator för jämförelser.", "Ett kommando som omvandlar text till tal."]],
    ["Vad är GitHub i kursens sammanhang?", "En plats där kod kan sparas och delas i repositoryn.", ["En funktion som kör Pythonkod snabbare.", "Ett sätt att skapa `if`-satser automatiskt.", "Ett alternativ till `input()`."]],
    ["Vad är en commit?", "En sparad version av ändringar.", ["Ett fel i en loop.", "En knapp i ett GUI.", "En typ av lista."]],
    ["Vad bör en README beskriva?", "Vad programmet gör och hur det körs.", ["Alla lösenord som behövs.", "Bara elevens namn.", "Varje rad kod utan förklaring."]],
    ["Vad gör PyInstaller?", "Packar ett Pythonprogram så det kan köras som en app eller körbar fil.", ["Skriver om koden till pseudokod.", "Rättar alla syntaxfel automatiskt.", "Skapar testfall för varje funktion."]],
    ["Vad är en kravspecifikation?", "En beskrivning av vad programmet ska klara av.", ["En lista med alla fel som programmet har.", "En färdig körbar app.", "En kommentar som placeras över varje loop."]],
    ["Varför testar man program?", "För att kontrollera att programmet fungerar som tänkt.", ["För att göra programmet längre.", "För att slippa planera.", "För att alla kommentarer ska köras."]],
    ["Vad är ett gränsfall i testning?", "Ett värde nära en viktig gräns, till exempel 0 eller 18.", ["Ett värde som aldrig kan användas.", "Ett test som bara läser filnamnet.", "Ett felmeddelande från GitHub."]],
  ];

  return items.map((item, index) => makeQuestion(item[0], item[1], item[2], index));
}

function createScenarioQuestions() {
  const items = [
    ["Ett program ska fråga efter två tal och visa summan. Vad är bäst?", "Läs in talen, omvandla dem till tal, addera och skriv ut svaret.", ["Läs in talen som text och sätt ihop dem med `+`.", "Skriv ut en färdig summa innan användaren skriver något.", "Spara talen i kommentarer och räkna för hand."]],
    ["Användaren skriver text när programmet förväntar sig ett tal. Vad bör programmet göra?", "Visa ett begripligt felmeddelande och låta användaren försöka igen.", ["Tolka texten som 0 utan att säga något.", "Krascha med Pythons tekniska felmeddelande.", "Hoppa över alla beräkningar och visa inget svar."]],
    ["Ett program ska visa en meny tills användaren väljer avsluta. Vilken struktur passar bäst?", "En `while`-loop som visar menyn och kontrollerar användarens val.", ["En `for`-loop som alltid kör menyn exakt tre gånger.", "En `if`-sats som bara kontrollerar första valet.", "En lista med menytexter men ingen kod som läser val."]],
    ["Ett program har kod för samma beräkning på flera ställen. Vad är en bra förbättring?", "Skapa en funktion och anropa den där beräkningen behövs.", ["Byt namn på variablerna i varje kopia.", "Lägg till fler kommentarer men behåll all upprepning.", "Flytta all upprepad kod längst ner i filen."]],
    ["Ett program ska spara fem provpoäng och räkna medelvärde. Vad passar bäst?", "Lagra poängen i en lista och summera dem.", ["Spara bara den senaste poängen i en variabel.", "Skriv alla poäng i en kommentar.", "Spara poängen som en enda text utan avgränsning."]],
    ["Ett villkor ska kontrollera att ålder är minst 13 och högst 19. Vad är rimligt?", "Använd två jämförelser med `and`.", ["Använd bara `ålder == 13`.", "Använd `or` så alla tal godkänns.", "Skriv villkoret som vanlig text utan operatorer."]],
    ["Ett program ska kontrollera om ett tal är jämnt. Vilken idé passar bäst?", "Använd resten vid division, till exempel `tal % 2 == 0`.", ["Jämför bara om talet är större än 2.", "Omvandla talet till lista och kontrollera längden.", "Använd `input()` en gång till och gissa."]],
    ["En elev ska planera innan kod skrivs. Vad är mest användbart?", "Skriv en enkel algoritm eller pseudokod.", ["Börja med att byta färg på terminalen.", "Skriv alla `print()` först utan att veta ordningen.", "Skapa en README innan programidén finns."]],
    ["Ett program ger fel svar men kraschar inte. Vilket arbetssätt passar?", "Testa små delar och jämför med förväntat resultat.", ["Ta bort alla villkor.", "Lägg hela programmet i en `try`-sats utan analys.", "Byt alla variabelnamn till kortare namn."]],
    ["Ett textbaserat program ska bli tydligare för användaren. Vad hjälper mest?", "Visa instruktioner och tydliga felmeddelanden.", ["Låt användaren gissa vilka val som finns.", "Skriv bara tekniska felmeddelanden.", "Ta bort alla utskrifter utom resultatet."]],
    ["Ett Tkinter-program ska läsa ett tal från ett `Entry`-fält. Vad bör göras?", "Hämta texten, omvandla den och hantera felaktig inmatning.", ["Räkna direkt med `Entry`-objektet.", "Anta att fältet alltid innehåller ett heltal.", "Ta bort fältet om användaren skriver fel."]],
    ["Ett GUI använder bara färg för att visa fel. Vad är bättre?", "Visa även text som förklarar vad som är fel.", ["Gör färgerna starkare men utan text.", "Dölj felet så gränssnittet ser renare ut.", "Låt knappen byta plats efter fel."]],
    ["En knapp i ett GUI heter `OK2`. Vad vore tydligare?", "En knapptext som beskriver handlingen, till exempel `Spara`.", ["En tom knapp utan text.", "En slumpad text varje gång fönstret öppnas.", "En knapptext med bara en siffra."]],
    ["Ett projekt ska redovisas. Vad bör eleven kunna förklara?", "Syfte, planering, viktiga delar, testning och förbättringar.", ["Bara hur många kodrader programmet har.", "Bara vilka färger som används.", "Bara vilken dator programmet skrevs på."]],
    ["Ett program ska byggas steg för steg. Vad är ett bra arbetssätt?", "Skapa en liten fungerande del, testa och bygg vidare.", ["Skriv allt på en gång och testa först på slutet.", "Börja med avancerad paketering innan programmet fungerar.", "Ta bort felmeddelanden för att slippa störas."]],
    ["Ett program ska kunna köras av någon annan. Vad bör README innehålla?", "Kort beskrivning, hur programmet startas och viktiga krav.", ["Privata lösenord och lokala sökvägar.", "Endast en lång kodlista.", "Bara bilder från programmet utan text."]],
    ["En elev använder Git. När är det bra att göra en commit?", "När en tydlig ändring fungerar och bör sparas.", ["Efter varje enskilt tangenttryck.", "Bara efter att hela kursen är klar.", "Innan koden sparats i en fil."]],
    ["En commit-kommentar ska beskriva vad som ändrats. Vilken är bäst?", "`Add menu validation`", ["`fix`", "`saker`", "`123`"]],
    ["Ett program ska laddas upp till GitHub. Vad är viktigt?", "Lägg relevanta filer i repositoryt och skriv en tydlig README.", ["Ladda upp lösenord i samma fil.", "Ta bort all kod och ladda bara upp skärmbilder.", "Byt filändelse från `.py` till `.txt` utan anledning."]],
    ["En Tkinter-app ska paketeras med PyInstaller. Vad bör kontrolleras först?", "Att Pythonprogrammet fungerar innan det byggs till app.", ["Att alla kommentarer är borttagna.", "Att programmet saknar funktioner.", "Att README är längre än koden."]],
    ["Ett program använder en bildfil. Vad behöver man tänka på vid paketering?", "Att appen också hittar bildfilen efter bygget.", ["Att bilden automatiskt blir Pythonkod.", "Att PyInstaller alltid gissar alla filer rätt.", "Att bilden måste ligga i README."]],
    ["Ett program med `while True` ska kunna avslutas. Vad behövs?", "Ett villkor eller val som leder till `break`.", ["Fler `print()`-satser.", "En lista med minst tre värden.", "Ett filnamn som slutar på `.md`."]],
    ["En funktion ska räkna ut area. Vad är bäst?", "Låt funktionen ta bredd och höjd som parametrar och returnera resultatet.", ["Låt funktionen fråga efter värden med `input()` varje gång utan behov.", "Skriv bara ut en färdig area.", "Spara areaformeln i en kommentar."]],
    ["Ett program ska användas av klasskamrater. Vad är viktigast för användbarhet?", "Tydliga instruktioner, rimliga felmeddelanden och enkel layout.", ["Så många färger som möjligt.", "Så korta variabelnamn som möjligt.", "Att alla fel visas på engelska oavsett målgrupp."]],
    ["Ett program ska kontrollera ett lösenord på enkel nivå. Vad är rimligt?", "Kontrollera exempelvis längd och om otillåtna tecken finns.", ["Spara lösenordet i klartext i README.", "Skriv alltid `godkänd` utan kontroll.", "Be användaren försöka tills programmet kraschar."]],
    ["Ett program ska hantera flera namn. Vilken lösning är bäst?", "Använd en lista och loopa igenom namnen.", ["Skapa en variabel för varje möjligt namn.", "Sätt ihop alla namn utan mellanrum.", "Lägg namnen i kommentarer."]],
    ["En elev ska hitta största talet i en lista. Vilken algoritm passar?", "Jämför varje tal med det största hittills.", ["Skriv ut första talet och anta att det är störst.", "Sortera texten i programfilen.", "Räkna antalet tal och använd det som störst."]],
    ["Ett program ska visa alla tal över 10. Vad är bäst?", "Loopa igenom listan och använd ett villkor.", ["Kontrollera bara första talet.", "Ta bort alla tal under körning utan kontroll.", "Skriv listan som text och leta manuellt."]],
    ["Ett program ska fråga efter val 1, 2 eller 3. Vad bör hända vid `9`?", "Visa att valet är ogiltigt och visa möjliga val igen.", ["Tolka `9` som val 1.", "Avsluta utan meddelande.", "Spara `9` som ett giltigt val ändå."]],
    ["Ett projekt i grupp behöver tydlig arbetsprocess. Vad passar bäst?", "Fördela ansvar, dokumentera beslut och testa löpande.", ["Alla arbetar i samma fil utan att prata.", "Ingen sparar versioner förrän redovisningen.", "Bara en person får förstå koden."]],
    ["Ett program ska kontrollera om en person är myndig. Vilka testvärden är bra?", "`17`, `18`, `19` och felaktig inmatning.", ["Bara `18`.", "Bara `100`.", "Bara texten `hej`."]],
    ["Ett program ska räkna rabatt. Vilka testvärden är rimliga?", "Vanligt pris, noll rabatt, hög rabatt och ogiltig input.", ["Bara ett pris som ger enkelt svar.", "Bara negativa priser.", "Bara textsträngar."]],
    ["En funktion saknar `return` men resultatet ska användas senare. Vad är problemet?", "Funktionen skickar inte tillbaka värdet till anropet.", ["Funktionen kan inte ha parametrar.", "Funktionen blir automatiskt en loop.", "Funktionen kan inte testas alls."]],
    ["Ett program har många nästlade `if`-satser. Vad kan förbättra läsbarheten?", "Dela upp logiken i funktioner eller förenkla villkor.", ["Lägg allt på en rad.", "Ta bort indraget.", "Byt alla `if` mot `print()`."]],
    ["Ett felmeddelande pekar på en viss rad. Vad bör eleven göra?", "Läsa raden och närliggande rader noggrant.", ["Ignorera radnumret.", "Ta bort hela filen.", "Byta dator."]],
    ["Ett program ska vara robust. Vad betyder det i kursens sammanhang?", "Det hanterar rimliga fel utan att krascha i onödan.", ["Det innehåller alltid flest kodrader.", "Det saknar all användarinmatning.", "Det fungerar bara med ett exakt testvärde."]],
    ["Ett program ska visa resultat efter knapptryckning. Vad behövs i Tkinter?", "En funktion kopplad till knappens `command`.", ["En kommentar direkt efter knappen.", "En `for`-loop som klickar på knappen.", "En README med knappens namn."]],
    ["Ett textfält i Tkinter ska tömmas efter sparning. Vad är rimligt?", "Använd en metod som rensar fältet efter att värdet har lästs.", ["Ta bort hela fönstret.", "Starta om datorn.", "Skriv över Pythonfilen."]],
    ["Ett program ska dela två tal. Vilket fel bör hanteras?", "Division med noll.", ["Att talet är större än 10.", "Att variabelnamnet är långt.", "Att README saknas."]],
    ["Ett program ska läsa in fem tal. Vad är bättre än fem nästan identiska kodblock?", "En loop som upprepar inmatningen.", ["Fem olika filer.", "Fem kommentarer.", "Fem oanvända funktioner."]],
    ["En elev vill förbättra ett program efter testning. Vad är bäst?", "Ändra en sak i taget och testa igen.", ["Ändra allt samtidigt utan att spara version.", "Ta bort testfallen.", "Bara ändra färgerna."]],
    ["Ett program har ett värde som används på flera ställen. Vad är ofta bättre än att skriva värdet överallt?", "Spara värdet i en tydligt namngiven variabel.", ["Skriva värdet i kommentarer.", "Dölja värdet i filnamnet.", "Använda olika värden varje gång."]],
    ["En användare förstår inte vad programmet vill ha. Vad bör förbättras?", "Instruktioner och exempel på giltig inmatning.", ["Fler tekniska felmeddelanden.", "Kortare variabelnamn.", "Mindre kontrast i GUI:t."]],
    ["Ett projekt ska kopplas till teknikarbete. Vad är viktigt?", "Planering, ansvar, dokumentation och utvärdering.", ["Bara att programmet har en knapp.", "Att koden saknar kommentarer.", "Att inget testas före redovisning."]],
    ["En elev ska välja projektidé på rimlig nivå. Vad är bäst?", "Välj ett projekt med tydligt syfte och lagom omfattning.", ["Välj största möjliga projekt utan plan.", "Välj något som kräver okända tekniker direkt.", "Välj ett projekt som inte går att testa."]],
    ["Ett program påverkar användare. Vad bör programmeraren tänka på?", "Användbarhet, integritet och rimliga konsekvenser.", ["Bara att koden är kort.", "Bara att programmet har många färger.", "Bara att filnamnet är tydligt."]],
    ["Ett program samlar in personuppgifter. Vad är en rimlig tanke?", "Samla bara in sådant som behövs och hantera det ansvarsfullt.", ["Spara allt som går eftersom det kan vara bra senare.", "Visa uppgifterna i README.", "Skicka uppgifterna till GitHub utan att tänka efter."]],
    ["Ett program automatiserar en uppgift. Vad bör testas?", "Att automatiseringen gör rätt sak i både vanliga fall och gränsfall.", ["Bara att programmet startar.", "Bara att filen har rätt namn.", "Bara att kommentarerna är skrivna."]],
    ["En elev får hjälp av AI med kod. Vad är viktigt?", "Att eleven förstår och testar koden innan den används.", ["Att koden kopieras utan genomgång.", "Att alla felmeddelanden ignoreras.", "Att variabelnamn byts slumpmässigt."]],
    ["Ett program ska lämnas in. Vad är bra att kontrollera sist?", "Att det körs, är testat och har tillräcklig dokumentation.", ["Att det är så långt som möjligt.", "Att alla utskrifter är borttagna.", "Att bara en person kan förstå det."]],
  ];

  return items.map((item, index) => makeQuestion(item[0], item[1], item[2], index));
}

function createMediumCodeQuestions() {
  const variants = [
    ["Anna", "Erik", "Maja", 2, 5],
    ["Olle", "Karin", "Nils", 3, 4],
    ["Elin", "Johan", "Elsa", 4, 7],
    ["Ebba", "Arne", "Stina", 5, 2],
    ["Eva", "Bo", "Linnea", 6, 3],
  ];
  const questions = [];

  variants.forEach(([first, second, third, x, y], index) => {
    questions.push(makeQuestion("Vad skrivs ut?", `Hej ${first}`, [`Hej namn`, first, `Hej ${second}`], index, `namn = "${first}"\nprint("Hej " + namn)`));
    questions.push(makeQuestion("Vad skrivs ut?", String(x * y), [String(x + y), `${x}${y}`, String(y)], index + 5, `tal = ${x}\nprint(tal * ${y})`));
    questions.push(makeQuestion("Vad skrivs ut?", "för låg", ["godkänd", String(x), "poäng"], index + 10, `poäng = ${x}\nif poäng >= ${y}:\n    print("godkänd")\nelse:\n    print("för låg")`));
    questions.push(makeQuestion("Vad skrivs ut?", `${x} ${x + 1} ${x + 2}`, [`${x + 1} ${x + 2} ${x + 3}`, `${x} ${y}`, String(x + y)], index + 15, `svar = []\nfor tal in range(${x}, ${x + 3}):\n    svar.append(str(tal))\nprint(" ".join(svar))`));
    questions.push(makeQuestion("Vad skrivs ut?", second, [first, third, "1"], index + 20, `namn = ["${first}", "${second}", "${third}"]\nprint(namn[1])`));
    questions.push(makeQuestion("Vad skrivs ut?", "3", ["2", "4", third], index + 25, `namn = ["${first}", "${second}"]\nnamn.append("${third}")\nprint(len(namn))`));
    questions.push(makeQuestion("Vad skrivs ut?", String(x + y), [String(x), String(y), String(x * y)], index + 30, `def addera(a, b):\n    return a + b\n\nprint(addera(${x}, ${y}))`));
    questions.push(makeQuestion("Vad skrivs ut?", String(x * 2), [String(x), String(x + 2), "None"], index + 35, `def dubbla(tal):\n    return tal * 2\n\nsvar = dubbla(${x})\nprint(svar)`));
    questions.push(makeQuestion("Vad skrivs ut?", "fel", [String(x), String(x + 1), `"${first}"`], index + 40, `try:\n    tal = int("${first}")\n    print(tal)\nexcept ValueError:\n    print("fel")`));
    const evenSum = [x, y, x + y].filter((number) => number % 2 === 0).reduce((sum, number) => sum + number, 0);
    questions.push(makeQuestion("Vad skrivs ut?", String(evenSum), [String(x + y), String(x), "0"], index + 45, `tal = [${x}, ${y}, ${x + y}]\nsumma = 0\nfor t in tal:\n    if t % 2 == 0:\n        summa += t\nprint(summa)`));
  });

  return questions.slice(0, 50);
}

function createHardCodeQuestions() {
  const variants = [
    ["Anna", "Erik", 2, 3],
    ["Maja", "Olle", 3, 4],
    ["Karin", "Nils", 4, 2],
    ["Elsa", "Johan", 5, 3],
    ["Stina", "Arne", 6, 2],
  ];
  const questions = [];

  variants.forEach(([first, second, x, y], index) => {
    questions.push(makeQuestion("Vad skrivs ut?", String(x + y + 1), [String(x + y), String(x * y), "0"], index, `def ändra(lista):\n    lista.append(${y})\n    lista[0] += 1\n\nvärden = [${x}]\nändra(värden)\nprint(sum(värden))`));
    questions.push(makeQuestion("Vad skrivs ut?", "hittad", ["saknas", first, "True"], index + 5, `namn = ["${first}", "${second}"]\nif "${second}" in namn:\n    print("hittad")\nelse:\n    print("saknas")`));
    questions.push(makeQuestion("Vad skrivs ut?", String(6), [String(3), String(9), String(x + y)], index + 10, `antal = 0\nfor rad in range(1, 4):\n    for kolumn in range(rad):\n        antal += 1\nprint(antal)`));
    const status = x + y >= 7 ? "klar" : "nära";
    questions.push(makeQuestion("Vad skrivs ut?", status, [status === "klar" ? "nära" : "klar", "börja", String(x + y)], index + 15, `def status(poäng):\n    if poäng >= 7:\n        return "klar"\n    elif poäng >= 4:\n        return "nära"\n    return "börja"\n\nprint(status(${x + y}))`));
    questions.push(makeQuestion("Vad skrivs ut?", second, [first, "IndexError", "2"], index + 20, `kö = ["${first}", "${second}"]\nprint(kö[-1])`));
    questions.push(makeQuestion("Vad skrivs ut?", String(x + y), [String(x), String(y), String(x * y)], index + 25, `tal = [[${x}], [${y}, ${x}]]\nprint(tal[0][0] + tal[1][0])`));
    const count = [x, y, x + y, 1].filter((number) => number > y).length;
    questions.push(makeQuestion("Vad skrivs ut?", String(count), [String(count + 1), String(Math.max(0, count - 1)), String(y)], index + 30, `tal = [${x}, ${y}, ${x + y}, 1]\nurval = []\nfor t in tal:\n    if t > ${y}:\n        urval.append(t)\nprint(len(urval))`));
    questions.push(makeQuestion("Vad skrivs ut?", `${first} ${second}`, [`${second} ${first}`, first, second], index + 35, `def bygg_text(namn):\n    return " ".join(namn)\n\nprint(bygg_text(["${first}", "${second}"]))`));
    const safeAnswer = y === 0 ? "noll" : String(Math.floor((x + y) / y));
    questions.push(makeQuestion("Vad skrivs ut?", safeAnswer, ["fel text", String(x + y), "0"], index + 40, `try:\n    värde = int("${y}")\n    print(${x + y} // värde)\nexcept ValueError:\n    print("fel text")\nexcept ZeroDivisionError:\n    print("noll")`));
    const passwordAnswer = first.length < 5 ? "kort" : "ok";
    questions.push(makeQuestion("Vad skrivs ut?", passwordAnswer, [first, "tom", "för lång"], index + 45, `def kontrollera(text):\n    if text == "":\n        return "tom"\n    if len(text) < 5:\n        return "kort"\n    return "ok"\n\nprint(kontrollera("${first}"))`));
  });

  return questions.slice(0, 50);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function answerLetter(index) {
  return ["A", "B", "C", "D"][index];
}

function chunkQuestions(questions, size) {
  const chunks = [];
  for (let index = 0; index < questions.length; index += size) {
    chunks.push(questions.slice(index, index + size));
  }
  return chunks;
}

function renderQuestion(question, questionIndex) {
  const options = question.options
    .map(
      (option, optionIndex) =>
        `<li><button class="option-button" type="button" data-option-index="${optionIndex}"><strong>${answerLetter(optionIndex)}.</strong> ${escapeHtml(option)}</button></li>`,
    )
    .join("");
  const code = question.code ? `<pre><code>${escapeHtml(question.code)}</code></pre>` : "";

  return `<article class="practice-card" data-question-index="${questionIndex}" data-correct-index="${question.correctIndex}" data-answer="${escapeHtml(question.answer)}">
    <h3>${questionIndex + 1}. ${escapeHtml(question.question)}</h3>
    ${code}
    <ol class="practice-options">${options}</ol>
    <p class="practice-answer" hidden aria-live="polite"></p>
  </article>`;
}

function renderPracticePage() {
  const root = document.getElementById("practice-root");
  const groupKey = document.body.dataset.practiceGroup || "1-20";
  const group = practiceGroups[groupKey];

  if (!root || !group) {
    return;
  }

  document.title = `Öva inför prov - ${group.title}`;
  document.getElementById("practice-title").textContent = `Öva inför prov - ${group.title}`;
  document.getElementById("practice-subtitle").textContent = group.subtitle;
  document.getElementById("practice-description").textContent = group.description;
  document.getElementById("question-total").textContent = String(group.questions.length);

  const nav = document.getElementById("practice-nav");
  nav.innerHTML = practiceLinks
    .map(([key, label]) => {
      const active = key === groupKey ? " practice-link-active" : "";
      return `<li><a class="practice-link${active}" href="ova-prov-${key}.html">${label}</a></li>`;
    })
    .join("");

  const questionGroups = chunkQuestions(group.questions, 10);

  root.innerHTML = questionGroups
    .map((questions, groupIndex) => {
      const start = groupIndex * 10;
      const end = start + questions.length;
      const hidden = groupIndex === 0 ? "" : " hidden";
      const questionMarkup = questions
        .map((question, index) => renderQuestion(question, start + index))
        .join("");

      return `<section class="practice-part"${hidden} data-part-index="${groupIndex}">
        <div class="practice-part-header">
          <div>
            <p class="eyebrow">Del ${groupIndex + 1} av ${questionGroups.length}</p>
            <h3>Fråga ${start + 1}-${end}</h3>
          </div>
          <p class="practice-part-progress" aria-live="polite">0 av ${questions.length} besvarade</p>
        </div>
        <div class="practice-list">${questionMarkup}</div>
        <div class="practice-actions">
          <button class="primary-link practice-check-button" type="button">Rätta 10 frågor</button>
          <p class="practice-result" hidden aria-live="polite"></p>
        </div>
      </section>`;
    })
    .join("");

  root.insertAdjacentHTML(
    "afterbegin",
    `<nav class="practice-part-nav" aria-label="Välj delprov">
      ${questionGroups
        .map((questions, groupIndex) => {
          const start = groupIndex * 10 + 1;
          const end = groupIndex * 10 + questions.length;
          const active = groupIndex === 0 ? " practice-part-link-active" : "";
          return `<button class="practice-part-link${active}" type="button" data-target-part="${groupIndex}">Fråga ${start}-${end}</button>`;
        })
        .join("")}
    </nav>`,
  );

  root.addEventListener("click", (event) => {
    const partLink = event.target.closest(".practice-part-link");
    if (partLink) {
      const targetPart = partLink.dataset.targetPart;
      root.querySelectorAll(".practice-part-link").forEach((link) => {
        link.classList.toggle("practice-part-link-active", link === partLink);
      });
      root.querySelectorAll(".practice-part").forEach((part) => {
        part.hidden = part.dataset.partIndex !== targetPart;
      });
      return;
    }

    const checkButton = event.target.closest(".practice-check-button");
    if (checkButton) {
      const part = checkButton.closest(".practice-part");
      const cards = Array.from(part.querySelectorAll(".practice-card"));
      const answeredCount = cards.filter((practiceCard) => practiceCard.dataset.selectedIndex !== undefined).length;
      const result = part.querySelector(".practice-result");

      if (answeredCount !== cards.length) {
        result.innerHTML = `<strong>Inte klar än.</strong> Svara på alla 10 frågor först. ${answeredCount} av ${cards.length} är besvarade.`;
        result.hidden = false;
        return;
      }

      let correctAnswers = 0;

      cards.forEach((card) => {
        const selectedIndex = Number(card.dataset.selectedIndex);
        const correctIndex = Number(card.dataset.correctIndex);
        const correctLetter = answerLetter(correctIndex);
        const feedback = card.querySelector(".practice-answer");
        const selectedButton = card.querySelector(`[data-option-index="${selectedIndex}"]`);

        card.dataset.answered = "true";
        card.querySelectorAll(".option-button").forEach((optionButton, optionIndex) => {
          optionButton.disabled = true;
          if (optionIndex === correctIndex) {
            optionButton.classList.add("is-correct");
          }
        });

        if (selectedIndex === correctIndex) {
          correctAnswers += 1;
          feedback.innerHTML = `<strong>Rätt.</strong> Svaret är ${correctLetter}.`;
        } else {
          selectedButton.classList.add("is-wrong");
          feedback.innerHTML = `<strong>Fel.</strong> Rätt svar är ${correctLetter}: ${escapeHtml(card.dataset.answer)}`;
        }
        feedback.hidden = false;
      });

      checkButton.disabled = true;
      result.innerHTML = `<strong>Resultat:</strong> ${correctAnswers} av ${cards.length} rätt.`;
      result.hidden = false;
      return;
    }

    const button = event.target.closest(".option-button");
    if (!button) {
      return;
    }

    const card = button.closest(".practice-card");
    if (card.dataset.answered === "true") {
      return;
    }

    card.dataset.selectedIndex = button.dataset.optionIndex;
    card.querySelectorAll(".option-button").forEach((optionButton) => {
      optionButton.classList.toggle("is-selected", optionButton === button);
    });

    const part = card.closest(".practice-part");
    const cards = Array.from(part.querySelectorAll(".practice-card"));
    const answeredCount = cards.filter((practiceCard) => practiceCard.dataset.selectedIndex !== undefined).length;
    const totalCount = cards.length;

    part.querySelector(".practice-part-progress").textContent = `${answeredCount} av ${totalCount} besvarade`;
    part.querySelector(".practice-result").hidden = true;
  });
}

document.addEventListener("DOMContentLoaded", renderPracticePage);
