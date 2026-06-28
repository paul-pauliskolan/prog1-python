(function () {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const currentEl = document.querySelector("[data-current-slide]");
  const totalEl = document.querySelector("[data-total-slides]");

  if (!slides.length) return;

  let slideIndex = 0;
  let fragmentIndex = 0;

  function fragmentsFor(slide) {
    return Array.from(slide.querySelectorAll(".fragment"));
  }

  function render() {
    slides.forEach((slide, index) => {
      const active = index === slideIndex;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", active ? "false" : "true");

      fragmentsFor(slide).forEach((fragment, position) => {
        const visible = active && position < fragmentIndex;
        const current = active && position === fragmentIndex - 1;
        fragment.classList.toggle("is-visible", visible);
        fragment.classList.toggle("is-dimmed", visible && !current);
      });
    });

    if (currentEl) currentEl.textContent = String(slideIndex + 1);
    if (totalEl) totalEl.textContent = String(slides.length);
  }

  function nextStep() {
    const fragments = fragmentsFor(slides[slideIndex]);
    if (fragmentIndex < fragments.length) {
      fragmentIndex += 1;
    } else {
      slideIndex = (slideIndex + 1) % slides.length;
      fragmentIndex = 0;
    }
    render();
  }

  function previousStep() {
    if (fragmentIndex > 0) {
      fragmentIndex -= 1;
    } else {
      slideIndex = (slideIndex - 1 + slides.length) % slides.length;
      fragmentIndex = fragmentsFor(slides[slideIndex]).length;
    }
    render();
  }

  document.addEventListener("keydown", (event) => {
    if (["ArrowRight", "PageDown", " "].includes(event.key)) {
      event.preventDefault();
      nextStep();
    } else if (["ArrowLeft", "PageUp", "Backspace"].includes(event.key)) {
      event.preventDefault();
      previousStep();
    }
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (target instanceof Element && target.closest("a, button, input, textarea, select")) return;
    if (event.button === 0) nextStep();
  });

  render();
})();
