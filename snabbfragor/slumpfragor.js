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
        { chapter:"Kapitel 04", question:"Vilka fyra steg är vanliga i ett beräkningsprogram?", answer:"Läs in värden, spara dem i variabler, gör beräkningen och skriv ut resultatet.", code:'price = float(input("Pris: "))\namount = int(input("Antal: "))\nprint(price * amount)', explanation:"Typomvandlingen gör att programmet kan räkna med inmatningen." }
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
