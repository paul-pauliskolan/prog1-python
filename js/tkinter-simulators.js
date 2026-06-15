document.addEventListener("DOMContentLoaded", () => {
  const parseNumber = (value) => {
    const number = Number(value.replace(",", "."));
    return Number.isFinite(number) ? number : null;
  };

  document.querySelectorAll("[data-tkinter-greet-demo]").forEach((demo) => {
    const entry = demo.querySelector("[data-tkinter-entry]");
    const button = demo.querySelector("[data-tkinter-button]");
    const label = demo.querySelector("[data-tkinter-label]");

    if (!entry || !button || !label) {
      return;
    }

    const greet = () => {
      const name = entry.value.trim();
      label.textContent = name ? `Hej ${name}` : "Skriv ett namn först";
    };

    button.addEventListener("click", greet);
    entry.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        greet();
      }
    });
  });

  document.querySelectorAll("[data-tkinter-multiplier-demo]").forEach((demo) => {
    const entry = demo.querySelector("[data-tkinter-entry]");
    const doubleButton = demo.querySelector("[data-tkinter-double]");
    const tripleButton = demo.querySelector("[data-tkinter-triple]");
    const label = demo.querySelector("[data-tkinter-label]");

    if (!entry || !doubleButton || !tripleButton || !label) {
      return;
    }

    const calculate = (factor) => {
      const value = parseNumber(entry.value);
      label.textContent = value === null ? "Skriv ett tal" : String(value * factor);
    };

    doubleButton.addEventListener("click", () => calculate(2));
    tripleButton.addEventListener("click", () => calculate(3));
  });

  document.querySelectorAll("[data-tkinter-movie-demo]").forEach((demo) => {
    const nameEntry = demo.querySelector("[data-tkinter-name]");
    const lengthEntry = demo.querySelector("[data-tkinter-length]");
    const button = demo.querySelector("[data-tkinter-button]");
    const label = demo.querySelector("[data-tkinter-label]");

    if (!nameEntry || !lengthEntry || !button || !label) {
      return;
    }

    button.addEventListener("click", () => {
      const name = nameEntry.value.trim() || "Filmen";
      const length = parseNumber(lengthEntry.value);
      label.textContent =
        length === null
          ? "Skriv en giltig längd"
          : `Filmen ${name} är ${length} minuter lång`;
    });
  });

  document.querySelectorAll("[data-tkinter-temperature-demo]").forEach((demo) => {
    const entry = demo.querySelector("[data-tkinter-entry]");
    const button = demo.querySelector("[data-tkinter-button]");
    const label = demo.querySelector("[data-tkinter-label]");

    if (!entry || !button || !label) {
      return;
    }

    button.addEventListener("click", () => {
      const temp = parseNumber(entry.value);
      const checkedChoice = demo.querySelector("[data-tkinter-choice]:checked");

      if (temp === null || !checkedChoice) {
        label.textContent = "Skriv ett giltigt tal";
        return;
      }

      if (checkedChoice.value === "c_to_f") {
        const result = (temp * 9) / 5 + 32;
        label.textContent = `${temp} °C = ${result.toFixed(1)} °F`;
      } else {
        const result = ((temp - 32) * 5) / 9;
        label.textContent = `${temp} °F = ${result.toFixed(1)} °C`;
      }
    });
  });

  document.querySelectorAll("[data-tkinter-budget-demo]").forEach((demo) => {
    const entry = demo.querySelector("[data-tkinter-entry]");
    const button = demo.querySelector("[data-tkinter-button]");
    const label = demo.querySelector("[data-tkinter-label]");
    let total = 0;

    if (!entry || !button || !label) {
      return;
    }

    button.addEventListener("click", () => {
      const cost = parseNumber(entry.value);

      if (cost === null) {
        label.textContent = "Fel inmatning";
        return;
      }

      total += cost;
      label.textContent = `Totalt: ${total} kr`;
    });
  });
});
