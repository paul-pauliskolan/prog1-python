(function () {
    const questions = [
        { chapter:"Kapitel 02", question:"Vad är en variabel?", answer:"En variabel har ett namn och lagrar ett värde som programmet kan använda.", code:'name = "Anna"', explanation:"Variabeln name innehåller texten Anna." },
        { chapter:"Kapitel 02", question:'Vilken datatyp har varje värde: 17, 21.5, "Hej" och True?', answer:'17 är int, 21.5 är float, "Hej" är str och True är bool.', code:'print(type(17))\nprint(type("Hej"))', explanation:"type() visar datatypen." },
        { chapter:"Kapitel 02", question:"Vad returnerar input() i Python?", answer:"input() returnerar alltid användarens svar som text, alltså datatypen str.", code:'age = input("Ålder: ")\nprint(type(age))', explanation:"Även siffror blir text när de läses in." },
        { chapter:"Kapitel 02", question:"Varför behövs typomvandling när två inmatade tal ska adderas?", answer:"input() ger text. Texten måste omvandlas till tal innan Python kan räkna med den.", code:'age = int(input("Ålder: "))\nprint(age + 1)', explanation:"int() omvandlar texten till ett heltal." },
        { chapter:"Kapitel 02", question:"Hur skriver man ut text och ett variabelvärde med en f-sträng?", answer:"Sätt bokstaven f före texten och variabelns namn inom klammerparenteser.", code:'name = "Anna"\nprint(f"Hej {name}")', explanation:"Programmet skriver ut Hej Anna." },
        { chapter:"Kapitel 03", question:"Vilka tre delar har ett enkelt programmeringsproblem?", answer:"Programmet tar emot information, bearbetar den och ger ett resultat.", code:'age = int(input("Ålder: "))\nprint(age + 5)', explanation:"Inmatning, bearbetning och utskrift bildar ett tydligt flöde." },
        { chapter:"Kapitel 03", question:"Vad är en algoritm, och vilka egenskaper ska en bra algoritm ha?", answer:"En algoritm är en stegvis lösning. Den ska vara tydlig, logisk och möjlig att följa." },
        { chapter:"Kapitel 03", question:"Varför delar programmerare upp stora problem i mindre delar?", answer:"Delarna blir lättare att förstå, skriva, testa, ändra och felsöka." },
        { chapter:"Kapitel 03", question:"Vad är pseudokod, och varför används den före riktig kod?", answer:"Pseudokod beskriver lösningen med vanliga ord utan krav på exakt syntax.", code:'läs in ett tal\nlägg till 5\nskriv ut resultatet', explanation:"Den låter programmeraren fokusera på lösningen." },
        { chapter:"Kapitel 03", question:"I vilken ordning går man från en idé till ett testat program?", answer:"Förstå problemet, planera algoritmen, skriv pseudokod eller flödesschema, skriv kod och testa." },
        { chapter:"Kapitel 04", question:"Vad är skillnaden mellan operatorerna / och //?", answer:"/ ger vanlig division, medan // ger heltalsdivision och tar bort decimaldelen.", code:'print(10 / 3)\nprint(10 // 3)', explanation:"Resultaten blir ungefär 3.33 respektive 3." },
        { chapter:"Kapitel 04", question:"Vad blir resultatet av en jämförelseoperator, och vad betyder ==?", answer:"Resultatet blir True eller False. == kontrollerar om två värden är lika.", code:'print(5 == 5)', explanation:"Ett enkelt = används för tilldelning." },
        { chapter:"Kapitel 04", question:"Hur fungerar de logiska operatorerna and, or och not?", answer:"and kräver två sanna villkor, or minst ett sant villkor och not vänder sanningsvärdet.", code:'age = 20\nprint(age >= 18 and age < 30)', explanation:"Uttrycket blir True eftersom båda villkoren stämmer." },
        { chapter:"Kapitel 04", question:"Vad blir 5 + 3 * 2, och hur kan parenteser ändra resultatet?", answer:"Det blir 11 eftersom multiplikation räknas först. (5 + 3) * 2 blir 16.", code:'print(5 + 3 * 2)\nprint((5 + 3) * 2)', explanation:"Parenteser bestämmer vad som räknas först." },
        { chapter:"Kapitel 04", question:"Vilka fyra steg är vanliga i ett beräkningsprogram?", answer:"Läs in värden, spara dem i variabler, gör beräkningen och skriv ut resultatet.", code:'price = float(input("Pris: "))\namount = int(input("Antal: "))\nprint(price * amount)', explanation:"Typomvandlingen gör att programmet kan räkna med inmatningen." },
        { chapter:"Kapitel 05", question:"Vad gör en if-sats, och när körs den indragna koden?", answer:"En if-sats kontrollerar ett villkor. Den indragna koden körs bara när villkoret är True.", code:'age = 18\nif age >= 18:\n    print("Du är myndig")', explanation:"Kolonet och indraget visar vilken kod som hör till villkoret." },
        { chapter:"Kapitel 05", question:"Vad är skillnaden mellan if, elif och else?", answer:"if testar det första villkoret, elif testar fler villkor om tidigare villkor var falska och else körs om inget villkor var sant.", code:'if temperature < 10:\n    print("Kallt")\nelif temperature <= 20:\n    print("Lagom")\nelse:\n    print("Varmt")', explanation:"Villkoren kontrolleras uppifrån och ner." },
        { chapter:"Kapitel 05", question:"Hur kan operatorn % användas för att avgöra om ett tal är jämnt?", answer:"Ett tal är jämnt om resten vid division med 2 är 0.", code:'if number % 2 == 0:\n    print("Jämnt")\nelse:\n    print("Udda")', explanation:"% ger resten efter en division." },
        { chapter:"Kapitel 05", question:"Vad betyder and, or och not i ett villkor?", answer:"and kräver att båda villkoren är sanna, or kräver minst ett sant villkor och not vänder ett sanningsvärde.", code:'if age >= 18 and has_ticket == "ja":\n    print("Välkommen")', explanation:"Logiska operatorer kombinerar eller ändrar villkor." },
        { chapter:"Kapitel 05", question:"Vad är ett nästlat villkor?", answer:"Det är en if-sats inuti en annan if-sats. Det inre villkoret kontrolleras bara om det yttre leder dit.", code:'if age >= 18:\n    if has_license == "ja":\n        print("Du får köra")', explanation:"Varje nivå får ytterligare ett indrag." },
        { chapter:"Kapitel 06", question:"När passar en for-loop respektive en while-loop bäst?", answer:"En for-loop passar när man vet vad eller hur många gånger man ska gå igenom. En while-loop passar när kod ska upprepas så länge ett villkor är sant.", code:'for i in range(5):\n    print(i)\n\nwhile count <= 5:\n    count += 1', explanation:"Båda looparna upprepar indragen kod." },
        { chapter:"Kapitel 06", question:"Vilka tal skapar range(5), och varför ingår inte 5?", answer:"range(5) skapar talen 0, 1, 2, 3 och 4. Stoppvärdet ingår inte.", code:'for i in range(5):\n    print(i)', explanation:"Loopen körs fem gånger." },
        { chapter:"Kapitel 06", question:"Hur fungerar range(start, stopp, steg)?", answer:"start är första talet, stopp är gränsen som inte tas med och steg anger hur mycket talet ändras varje varv.", code:'for i in range(2, 11, 2):\n    print(i)', explanation:"Exemplet skriver ut 2, 4, 6, 8 och 10." },
        { chapter:"Kapitel 06", question:"Hur uppstår en oändlig while-loop, och hur kan den undvikas?", answer:"Den uppstår när villkoret aldrig blir False. Ändra därför den variabel som styr villkoret i loopen.", code:'count = 1\nwhile count <= 5:\n    print(count)\n    count += 1', explanation:"Utan ökningen skulle count alltid vara 1." },
        { chapter:"Kapitel 06", question:"Vad gör break i en loop?", answer:"break avslutar loopen direkt, även om loopens villkor fortfarande är sant.", code:'while True:\n    number = int(input("Tal: "))\n    if number == 0:\n        break', explanation:"Här fungerar 0 som stoppvärde." },
        { chapter:"Kapitel 07", question:"Vad är en lista, och hur skapas en lista med tre tal?", answer:"En lista är en datastruktur som kan lagra flera värden i en variabel.", code:'numbers = [2, 4, 6]', explanation:"Hakparenteser används för att skapa listan." },
        { chapter:"Kapitel 07", question:"Vad betyder index i en lista, och vilka index har första och sista värdet?", answer:"Index är ett värdes position. Det första värdet har index 0 och det sista kan hämtas med index -1.", code:'colors = ["röd", "grön", "blå"]\nprint(colors[0])\nprint(colors[-1])', explanation:"Python börjar räkna listpositioner från 0." },
        { chapter:"Kapitel 07", question:"Hur går man igenom alla värden i en lista?", answer:"Använd en for-loop där loopvariabeln får ett värde ur listan i taget.", code:'numbers = [2, 4, 6]\nfor number in numbers:\n    print(number)', explanation:"Den indragna koden körs en gång per värde." },
        { chapter:"Kapitel 07", question:"Vad gör append() med en lista?", answer:"append() lägger till ett nytt värde sist i listan.", code:'numbers = []\nnumbers.append(7)\nprint(numbers)', explanation:"Listan ändras från tom till [7]." },
        { chapter:"Kapitel 07", question:"Hur räknar man ut medelvärdet av talen i en lista?", answer:"Dividera summan av talen med antalet värden i listan.", code:'numbers = [4, 6, 8]\naverage = sum(numbers) / len(numbers)\nprint(average)', explanation:"sum() ger summan och len() ger antalet värden." },
        { chapter:"Kapitel 08", question:"Vad är en funktion, och varför används funktioner?", answer:"En funktion är en namngiven del av programmet som utför en bestämd uppgift. Funktioner gör kod lättare att läsa, ändra och återanvända.", code:'def greet():\n    print("Hej!")\n\ngreet()', explanation:"def skapar funktionen och greet() anropar den." },
        { chapter:"Kapitel 08", question:"Vad är en parameter, och vad är ett argument?", answer:"En parameter är ett namn i funktionsdefinitionen. Ett argument är värdet som skickas in när funktionen anropas.", code:'def greet(name):\n    print(f"Hej {name}")\n\ngreet("Ada")', explanation:"name är parametern och \"Ada\" är argumentet." },
        { chapter:"Kapitel 08", question:"Vad gör return i en funktion?", answer:"return skickar tillbaka ett värde till platsen där funktionen anropades.", code:'def add(a, b):\n    return a + b\n\nresult = add(4, 6)', explanation:"Det returnerade värdet kan sparas eller användas i en ny beräkning." },
        { chapter:"Kapitel 08", question:"Hur får man ett slumpat heltal från 1 till och med 6?", answer:"Importera modulen random och anropa random.randint(1, 6). Båda gränserna kan väljas.", code:'import random\nnumber = random.randint(1, 6)', explanation:"Resultatet kan vara vilket heltal som helst från 1 till 6." },
        { chapter:"Kapitel 08", question:"Hur kan funktioner ge ett större program en tydligare struktur?", answer:"Dela upp programmet så att varje funktion har en tydlig uppgift, placera funktionerna överst och huvudprogrammet längst ner.", code:'def square(number):\n    return number * number\n\nvalue = int(input("Tal: "))\nprint(square(value))', explanation:"Små funktioner blir lättare att testa och återanvända." },
        { chapter:"Kapitel 09", question:"Vad är ett syntaxfel?", answer:"Ett syntaxfel betyder att koden inte följer Pythons skrivregler, så programmet kan inte köras.", code:'if age >= 18:\n    print("Myndig")', explanation:"Vanliga syntaxfel är saknade parenteser, kolon, indrag eller felstavade kommandon." },
        { chapter:"Kapitel 09", question:"Vad är ett logiskt fel?", answer:"Programmet kan köras men ger fel resultat eftersom lösningen eller beräkningen är fel.", code:'average = (a + b) / 2', explanation:"Logiska fel ger ofta inget felmeddelande och hittas genom testning." },
        { chapter:"Kapitel 09", question:"Vad är ett exekveringsfel?", answer:"Det är ett fel som uppstår medan ett syntaktiskt korrekt program körs och får programmet att krascha.", code:'number = int(input("Tal: "))\nprint(10 / number)', explanation:"Text i stället för tal eller talet 0 kan orsaka fel här." },
        { chapter:"Kapitel 09", question:"Vilken information ger ett felmeddelande vanligtvis?", answer:"Det visar ofta filnamn, radnummer och vilken typ av fel som inträffade.", code:'ValueError: invalid literal for int()', explanation:"Läs feltypen och undersök sedan den angivna raden." },
        { chapter:"Kapitel 09", question:"Hur felsöker och testar man ett program systematiskt?", answer:"Läs felmeddelandet, kontrollera värden, testa små delar och olika indata samt ändra en sak i taget.", code:'print("a:", a)\nprint("b:", b)', explanation:"Testa även gränsvärden och oväntad indata." },
        { chapter:"Kapitel 10", question:"Vad är ett undantag i Python?", answer:"Ett undantag är ett fel som uppstår när programmet körs. Det kan fångas och hanteras så att programmet inte kraschar.", code:'try:\n    age = int(input("Ålder: "))\nexcept ValueError:\n    print("Skriv ett heltal")', explanation:"Felaktig talinmatning ger här ett ValueError." },
        { chapter:"Kapitel 10", question:"Hur samarbetar try och except?", answer:"Python försöker köra koden i try. Om ett matchande fel uppstår avbryts try-delen och except-delen körs.", code:'try:\n    print(10 / number)\nexcept ZeroDivisionError:\n    print("Kan inte dela med noll")', explanation:"Programmet kan då ge ett begripligt meddelande." },
        { chapter:"Kapitel 10", question:"Hur kan en loop och try–except låta användaren försöka igen?", answer:"Lägg inmatningen i en loop, fånga fel med except och använd break först när inmatningen är giltig.", code:'while True:\n    try:\n        number = int(input("Tal: "))\n        break\n    except ValueError:\n        print("Försök igen")', explanation:"Loopen fortsätter efter ogiltig inmatning." },
        { chapter:"Kapitel 10", question:"Vad kännetecknar ett robust program?", answer:"Det hanterar felaktig inmatning och oväntade situationer, ger tydliga meddelanden och kraschar inte i onödan.", code:'if divisor == 0:\n    print("Talet får inte vara 0")\nelse:\n    print(100 / divisor)', explanation:"Kontroller kan förebygga fel innan en beräkning görs." },
        { chapter:"Kapitel 10", question:"Vilka två problem måste ett robust divisionsprogram hantera?", answer:"Det måste hantera värden som inte kan omvandlas till tal och förhindra division med noll.", code:'try:\n    divisor = int(input("Delare: "))\n    print(100 / divisor)\nexcept ValueError:\n    print("Skriv ett heltal")\nexcept ZeroDivisionError:\n    print("Noll är inte tillåtet")', explanation:"Olika undantag kan få olika felmeddelanden." }
    ];
    const chapter = document.querySelector("[data-chapter]");
    const position = document.querySelector("[data-position]");
    const question = document.querySelector("[data-random-question]");
    const answer = document.querySelector("[data-random-answer]");
    const answerText = document.querySelector("[data-answer-text]");
    const codeWrap = document.querySelector("[data-code-wrap]");
    const answerCode = document.querySelector("[data-answer-code]");
    const explanation = document.querySelector("[data-explanation]");
    const showButton = document.querySelector("[data-show-answer]");
    const nextButton = document.querySelector("[data-next-random]");
    let order = [];
    let index = 0;
    function shuffle() {
        order = questions.slice();
        for (let i = order.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [order[i], order[j]] = [order[j], order[i]];
        }
        index = 0;
    }
    function render() {
        const item = order[index];
        chapter.textContent = item.chapter;
        position.textContent = `Fråga ${index + 1} av ${order.length}`;
        question.textContent = item.question;
        answerText.textContent = item.answer;
        answerCode.textContent = item.code || "";
        codeWrap.hidden = !item.code;
        explanation.textContent = item.explanation || "";
        answer.hidden = true;
        showButton.hidden = false;
        nextButton.hidden = true;
        showButton.focus();
    }
    function showAnswer() {
        answer.hidden = false;
        showButton.hidden = true;
        nextButton.hidden = false;
        nextButton.textContent = index === order.length - 1 ? "Blanda om och börja om" : "Nästa slumpfråga";
        nextButton.focus();
    }
    function next() {
        if (index === order.length - 1) shuffle(); else index += 1;
        render();
    }
    showButton.addEventListener("click", showAnswer);
    nextButton.addEventListener("click", next);
    document.addEventListener("keydown", event => {
        if (event.key !== " " || event.target.matches("button")) return;
        event.preventDefault();
        if (answer.hidden) showAnswer(); else next();
    });
    shuffle();
    render();
})();
