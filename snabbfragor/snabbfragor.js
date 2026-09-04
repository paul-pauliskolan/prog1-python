(function () {
    const slides = Array.from(document.querySelectorAll(".slide"));
    const number = document.querySelector("[data-question-number]");
    const type = document.querySelector("[data-card-type]");
    const previousButton = document.querySelector("[data-previous]");
    const nextButton = document.querySelector("[data-next]");
    if (!slides.length) return;
    let index = 0;
    function render() {
        slides.forEach((slide, position) => {
            const active = position === index;
            slide.classList.toggle("is-active", active);
            slide.setAttribute("aria-hidden", active ? "false" : "true");
        });
        const current = slides[index];
        number.textContent = current.dataset.question;
        type.textContent = current.classList.contains("answer-slide") ? "Facit" : "Fråga";
        previousButton.disabled = index === 0;
        nextButton.textContent = index === slides.length - 1 ? "Till översikten" : "Nästa →";
    }
    function next() { if (index < slides.length - 1) { index += 1; render(); } else { location.href = "index.html"; } }
    function previous() { if (index > 0) { index -= 1; render(); } }
    document.addEventListener("keydown", event => {
        if (event.key === " " || event.key === "ArrowRight") { event.preventDefault(); next(); }
        else if (event.key === "ArrowLeft") { event.preventDefault(); previous(); }
    });
    previousButton.addEventListener("click", previous);
    nextButton.addEventListener("click", next);
    render();
})();
