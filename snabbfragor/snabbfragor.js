(function () {
    const shell = document.querySelector("[data-chapter-deck]");
    if (!shell || !window.SNABBFRAGOR) return;
    const chapterNumber = Number(document.body.dataset.chapter);
    const chapterLabel = `Kapitel ${String(chapterNumber).padStart(2, "0")}`;
    const questions = window.SNABBFRAGOR.filter(item => item.chapter === chapterLabel);
    const chapterName = document.querySelector("[data-chapter-name]");
    const number = document.querySelector("[data-question-number]");
    const type = document.querySelector("[data-card-type]");
    const question = document.querySelector("[data-question]");
    const answer = document.querySelector("[data-answer]");
    const codeWrap = document.querySelector("[data-code-wrap]");
    const code = document.querySelector("[data-code]");
    const explanation = document.querySelector("[data-explanation]");
    const previousButton = document.querySelector("[data-previous]");
    const nextButton = document.querySelector("[data-next]");
    const total = document.querySelector("[data-total]");
    let questionIndex = 0;
    let showingAnswer = false;
    chapterName.textContent = chapterLabel;
    total.textContent = String(questions.length);
    function render() {
        const item = questions[questionIndex];
        if (!item) { question.textContent = "Frågorna kunde inte läsas in."; return; }
        number.textContent = String(questionIndex + 1);
        type.textContent = showingAnswer ? "Facit" : "Fråga";
        question.hidden = showingAnswer;
        answer.hidden = !showingAnswer;
        question.textContent = item.question;
        answer.textContent = item.answer;
        code.textContent = item.code || "";
        codeWrap.hidden = !showingAnswer || !item.code;
        explanation.textContent = showingAnswer ? (item.explanation || "") : "";
        previousButton.disabled = questionIndex === 0 && !showingAnswer;
        nextButton.textContent = showingAnswer && questionIndex === questions.length - 1
            ? "Till översikten" : showingAnswer ? "Nästa fråga →" : "Visa facit →";
    }
    function next() {
        if (!showingAnswer) showingAnswer = true;
        else if (questionIndex < questions.length - 1) { questionIndex += 1; showingAnswer = false; }
        else { location.href = "index.html"; return; }
        render();
    }
    function previous() {
        if (showingAnswer) showingAnswer = false;
        else if (questionIndex > 0) { questionIndex -= 1; showingAnswer = true; }
        render();
    }
    document.addEventListener("keydown", event => {
        if (event.key === " " || event.key === "ArrowRight") { event.preventDefault(); next(); }
        else if (event.key === "ArrowLeft") { event.preventDefault(); previous(); }
    });
    previousButton.addEventListener("click", previous);
    nextButton.addEventListener("click", next);
    render();
})();
