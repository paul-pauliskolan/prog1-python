// Programmering nivå 1 med Python - shared site logic

const BOOK_TITLE = "Programmering nivå 1 med Python";
const BOOK_SHORT_TITLE = "Python";
const QUIZ_STATISTICS_ENDPOINT = "https://script.google.com/macros/s/AKfycbzGXh735UHr8MFxxka9Z-yUrbfNXWJxpUrSd5Qxjftofn2cm5ada79G8C7_G2wuTh-HwQ/exec";
const CHAPTER_EXTRAS = [
  {
    afterChapter: 19,
    number: "SIM",
    title: "Simulering: = och ==",
    hrefFromHome: "chapters/tilldelning-jamforelse.html",
    hrefFromChapter: "tilldelning-jamforelse.html",
  },
  {
    afterChapter: 4,
    number: "INL",
    title: "Inlämningsuppgift 1 - kap 1-4",
    hrefFromHome: "chapters/ovningsuppgift-kap-1-4.html",
    hrefFromChapter: "ovningsuppgift-kap-1-4.html",
  },
  {
    afterChapter: 7,
    number: "INL",
    title: "Inlämningsuppgift 2 - kap 1-7",
    hrefFromHome: "chapters/ovningsuppgift-kap-1-7.html",
    hrefFromChapter: "ovningsuppgift-kap-1-7.html",
  },
  {
    afterChapter: 11,
    number: "INL",
    title: "Inlämningsuppgift 3 - kap 1-11",
    hrefFromHome: "chapters/ovningsuppgift-kap-1-11.html",
    hrefFromChapter: "ovningsuppgift-kap-1-11.html",
  },
  {
    afterChapter: 18,
    number: "INL",
    title: "Inlämningsuppgift 4 - kap 1-18",
    hrefFromHome: "chapters/ovningsuppgift-kap-1-18.html",
    hrefFromChapter: "ovningsuppgift-kap-1-18.html",
  },
];

let chaptersData = [];

document.addEventListener("DOMContentLoaded", () => {
  loadChaptersData();
  setupMenuToggle();
  applyBranding();
  injectGoogleCse();
});

function applyBranding() {
  const logo = document.querySelector(".navbar .logo");
  if (logo) {
    logo.textContent = `🐍 ${BOOK_SHORT_TITLE}`;
    if (!logo.getAttribute("href")) {
      logo.setAttribute("href", "index.html");
    }
  }

  const previewHeader = document.querySelector(".preview-header h1");
  if (previewHeader) {
    previewHeader.textContent = `📖 ${BOOK_TITLE}`;
  }

  const pageTitle = document.title || "";
  if (pageTitle.includes("Space Safari")) {
    document.title = pageTitle.replace(/Space Safari/g, BOOK_TITLE);
  }

  const chapterHomeTitle = document.querySelector(
    ".chapter-page header h1 a, .chapter-page header h1",
  );
  if (chapterHomeTitle && !chapterHomeTitle.hasAttribute("data-preserve-title")) {
    chapterHomeTitle.textContent = `🐍 ${BOOK_SHORT_TITLE}`;
  }
}

function injectGoogleCse() {
  if (document.getElementById("google-cse-wrap")) {
    return;
  }

  const navbar = document.querySelector(".navbar");
  if (!navbar) {
    return;
  }

  const menuToggle = document.getElementById("menu-toggle");

  const searchToggle = document.createElement("button");
  searchToggle.type = "button";
  searchToggle.className = "search-toggle";
  searchToggle.id = "search-toggle";
  searchToggle.setAttribute("aria-label", "Visa eller dölj sökfält");
  searchToggle.setAttribute("aria-controls", "google-cse-wrap");
  searchToggle.setAttribute("aria-expanded", "false");
  searchToggle.textContent = "🔍";

  const wrapper = document.createElement("section");
  wrapper.className = "site-search";
  wrapper.id = "google-cse-wrap";

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://cse.google.com/cse.js?cx=43ae7d3150a604896";

  const search = document.createElement("div");
  search.className = "gcse-search";

  wrapper.append(script, search);

  searchToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("mobile-search-open");
    searchToggle.setAttribute("aria-expanded", String(isOpen));
  });

  if (menuToggle) {
    navbar.insertBefore(searchToggle, menuToggle);
    navbar.insertBefore(wrapper, menuToggle);
  } else {
    navbar.appendChild(searchToggle);
    navbar.appendChild(wrapper);
  }
}

function setupMenuToggle() {
  const menuToggle = document.getElementById("menu-toggle");
  const menuClose = document.getElementById("menu-close");
  const sideMenu = document.getElementById("side-menu");
  const chapterLinks = document.querySelectorAll(".side-menu .chapter-link");

  if (!sideMenu) {
    return;
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      const navbar = document.querySelector(".navbar");
      const searchToggle = document.getElementById("search-toggle");
      if (navbar) {
        navbar.classList.remove("mobile-search-open");
      }
      if (searchToggle) {
        searchToggle.setAttribute("aria-expanded", "false");
      }

      if (sideMenu.classList.contains("active")) {
        closeMenu();
      } else {
        sideMenu.classList.add("active");
        document.body.classList.add("menu-open");
      }
    });
  }

  if (menuClose) {
    menuClose.addEventListener("click", (e) => {
      e.preventDefault();
      closeMenu();
    });
  }

  chapterLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMenu();
    });
  });

  // Close menu when clicking overlay on mobile
  document.addEventListener("click", (e) => {
    if (
      sideMenu.classList.contains("active") &&
      !sideMenu.contains(e.target) &&
      !(menuToggle && menuToggle.contains(e.target))
    ) {
      closeMenu();
    }
  });
}

function closeMenu() {
  const sideMenu = document.getElementById("side-menu");
  sideMenu.classList.remove("active");
  document.body.classList.remove("menu-open");
}

function loadChaptersData() {
  const jsonPath = document.body.classList.contains("chapter-page")
    ? "../data/chapters.json"
    : "data/chapters.json";

  fetch(jsonPath)
    .then((response) => response.json())
    .then((data) => {
      chaptersData = data.chapters;
      renderChapterMenu();

      // Render homepage menu if it exists
      const homepageMenu = document.getElementById("chapters-menu-homepage");
      if (homepageMenu) {
        renderChapterMenuFullWidth(homepageMenu);
      }
    })
    .catch((error) => console.error("Error loading chapters:", error));
}

function renderChapterMenu() {
  const menu = document.getElementById("chapters-menu");
  if (!menu) return;

  menu.innerHTML = "";
  chaptersData.forEach((chapter) => {
    const link = document.createElement("a");
    const isChapterPage = document.body.classList.contains("chapter-page");
    link.href = isChapterPage
      ? `chapter-${chapter.number}.html`
      : `chapters/chapter-${chapter.number}.html`;
    link.className = "chapter-link";

    link.innerHTML = `<span class="chapter-number">${String(chapter.number).padStart(2, "0")}</span><span class="chapter-title">${chapter.title}</span>`;

    menu.appendChild(link);
    appendChapterExtras(menu, chapter.number, isChapterPage);
  });
}

function renderChapterMenuFullWidth(menuElement) {
  menuElement.innerHTML = "";
  chaptersData.forEach((chapter) => {
    const link = document.createElement("a");
    link.href = `chapters/chapter-${chapter.number}.html`;
    link.className = "chapter-link";

    link.innerHTML = `<span class="chapter-number">${String(chapter.number).padStart(2, "0")}</span><span class="chapter-title">${chapter.title}</span>`;

    menuElement.appendChild(link);
    appendChapterExtras(menuElement, chapter.number, false);
  });
}

function appendChapterExtras(menuElement, chapterNumber, isChapterPage) {
  CHAPTER_EXTRAS.filter((extra) => extra.afterChapter === chapterNumber).forEach(
    (extra) => {
      const link = document.createElement("a");
      link.href = isChapterPage ? extra.hrefFromChapter : extra.hrefFromHome;
      link.className = "chapter-link chapter-link-extra";
      link.innerHTML = `<span class="chapter-number">${extra.number}</span><span class="chapter-title">${extra.title}</span>`;
      menuElement.appendChild(link);
    },
  );
}

function getChapter(chapterNumber) {
  return chaptersData.find((ch) => ch.number === parseInt(chapterNumber));
}

function getPreviousChapter(chapterNumber) {
  const chapter = getChapter(chapterNumber);
  if (!chapter || chapter.number === 1) return null;
  return getChapter(chapter.number - 1);
}

function getNextChapter(chapterNumber) {
  const chapter = getChapter(chapterNumber);
  if (!chapter || chapter.number === chaptersData.length) return null;
  return getChapter(chapter.number + 1);
}

function renderChapterPage(chapterNumber) {
  const chapter = getChapter(chapterNumber);
  if (!chapter) {
    window.location.href = "/";
    return;
  }

  document.title = `${chapter.title} - ${BOOK_TITLE}`;

  const header = document.querySelector(".chapter-header");
  if (header) {
    header.innerHTML = `
            <h1>Chapter ${chapter.number}: ${chapter.title}</h1>
            <div class="chapter-meta">
                <span>📚 ${chapter.sections.length} sections</span>
                <span>🎬 ${chapter.videoSuggestions.length} videos</span>
                <span>🔗 ${chapter.resources.length} resources</span>
            </div>
        `;
  }

  const summary = document.querySelector("#chapter-summary");
  if (summary) {
    summary.innerHTML = `
            <div class="content-section">
                <h2>Overview</h2>
                <p>${chapter.summary}</p>
                <div class="key-topics">
                    ${chapter.keyTopics.map((topic) => `<span>${topic}</span>`).join("")}
                </div>
            </div>
        `;
  }

  const sections = document.querySelector("#chapter-sections");
  if (sections) {
    sections.innerHTML = `
            <div class="content-section">
                <h2>Sections</h2>
                <ul>
                    ${chapter.sections.map((section) => `<li>${section}</li>`).join("")}
                </ul>
            </div>
        `;
  }

  const videosContainer = document.querySelector("#chapter-videos");
  if (videosContainer) {
    let html = '<h2>Videos</h2><div class="video-grid">';
    chapter.videoSuggestions.forEach((video) => {
      const title = video.title || "Video";
      const source = video.source || "";
      const type = video.type || "link";

      if (type === "gif" && video.url) {
        html += `
                <div class="video-card">
                    <h3>${title}</h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">${source}</p>
                    <img class="video-embed gif-embed" src="${video.url}" alt="${title}" />
                </div>
            `;
      } else if (type === "youtube") {
        let embedSrc = null;
        if (video.youtubeId) {
          embedSrc = `https://www.youtube.com/embed/${video.youtubeId}`;
        } else if (video.embedUrl) {
          embedSrc = video.embedUrl;
        } else if (video.url) {
          try {
            const url = new URL(video.url);
            const host = url.hostname.replace("www.", "");
            if (host === "youtube.com" && url.pathname === "/watch") {
              const id = url.searchParams.get("v");
              if (id) embedSrc = `https://www.youtube.com/embed/${id}`;
            } else if (host === "youtu.be") {
              const id = url.pathname.split("/").filter(Boolean)[0];
              if (id) embedSrc = `https://www.youtube.com/embed/${id}`;
            }
          } catch (e) {
            // ignore parsing errors
          }
        }

        if (embedSrc) {
          html += `
                <div class="video-card">
                    <h3>${title}</h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">${source}</p>
                    <iframe class="video-embed" src="${embedSrc}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            `;
        } else {
          const linkUrl =
            video.url ||
            `https://www.youtube.com/results?search_query=${encodeURIComponent(title + " " + source)}`;
          html += `
                <div class="video-card">
                    <h3>${title}</h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">${source}</p>
                    <a href="${linkUrl}" target="_blank">Open on YouTube</a>
                </div>
            `;
        }
      } else {
        html += `
                <div class="video-card">
                    <div style="font-size: 2rem;">🎬</div>
                    <h3>${title}</h3>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">${source}</p>
                    <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(title + " " + source)}" target="_blank">Watch on YouTube</a>
                </div>
            `;
      }
    });
    html += "</div>";
    videosContainer.innerHTML = html;
  }

  const resourcesContainer = document.querySelector("#chapter-resources");
  if (resourcesContainer) {
    let html = '<h2>Resources</h2><div class="resource-list">';
    chapter.resources.forEach((resource) => {
      html += `
                <div class="resource-item">
                    <h3>${resource.title}</h3>
                    <p>${resource.description}</p>
                    <a href="${resource.url}" target="_blank">Visit →</a>
                </div>
            `;
    });
    html += "</div>";
    resourcesContainer.innerHTML = html;
  }

  const navContainer = document.querySelector(".chapter-nav");
  if (navContainer) {
    const prevChapter = getPreviousChapter(chapterNumber);
    const nextChapter = getNextChapter(chapterNumber);

    let html = "";

    if (prevChapter) {
      html += `
                <a href="chapter-${prevChapter.number}.html" class="nav-button">
                    <div>
                        <div class="nav-label">← Previous</div>
                        <div class="nav-title">${prevChapter.title}</div>
                    </div>
                </a>
            `;
    } else {
      html += `<a href="../index.html" class="nav-button"><div class="nav-label">← Home</div></a>`;
    }

    if (nextChapter) {
      html += `
                <a href="chapter-${nextChapter.number}.html" class="nav-button">
                    <div style="text-align: right;">
                        <div class="nav-label">Next →</div>
                        <div class="nav-title">${nextChapter.title}</div>
                    </div>
                </a>
            `;
    }

    navContainer.innerHTML = html;
  }
}

window.pythonbook = {
  getChapter,
  renderChapterPage,
};

window.spacesafari = window.pythonbook;

function isQuizStatisticsEnabled() {
  return Boolean(QUIZ_STATISTICS_ENDPOINT);
}

function getQuizStatisticsMetadata() {
  const chapterMatch = window.location.pathname.match(/chapter-(\d+)\.html$/);
  const chapterNumber = chapterMatch ? chapterMatch[1] : "okant";

  return {
    quizId: `kapitel-${chapterNumber}`,
    chapter: chapterNumber === "okant" ? "Okant kapitel" : `Kapitel ${chapterNumber}`,
  };
}

function getQuestionText(question) {
  const legend = question.querySelector("legend");
  return legend ? legend.textContent.replace(/^\s*\d+[.)]\s*/, "").trim() : "";
}

function recordQuizStatistics({ quizId, chapter, answers }) {
  if (!isQuizStatisticsEnabled() || !Array.isArray(answers) || !answers.length) {
    return;
  }

  fetch(QUIZ_STATISTICS_ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      quizId,
      chapter,
      pagePath: window.location.pathname,
      answers,
    }),
  }).catch(() => {
    // Rattningen ska fungera aven om statistik inte kan skickas.
  });
}

function sendQuizStatistics(form, answers) {
  if (form.dataset.statisticsSent || !answers.length) {
    return;
  }

  recordQuizStatistics({
    ...getQuizStatisticsMetadata(),
    answers,
  });
  form.dataset.statisticsSent = "true";
}

function sendLegacyQuizStatistics(form, answerKey) {
  if (!form) {
    return;
  }

  const answers = Object.entries(answerKey).map(([questionName, data], index) => {
    const question = form.querySelector(`input[name="${questionName}"]`)?.closest("fieldset");
    const selected = question?.querySelector("input[type='radio']:checked");

    return {
      questionNumber: index + 1,
      questionText: question ? getQuestionText(question) : "",
      selectedAnswer: selected ? selected.value : "",
      correctAnswer: data.correct,
      isCorrect: Boolean(selected && selected.value === data.correct),
    };
  });

  sendQuizStatistics(form, answers);
}

window.quizStatistics = { sendLegacyQuizStatistics };

// Questions are scenario-based where the chapter content supports it. Wrong
// answers represent common beginner mistakes rather than unrelated joke answers.
const IMPROVED_CHAPTER_QUIZZES = {
  1: [
    ["En elev skriver <code>print(\"Hej!\")</code> och kör filen. Vad är själva programmet?", ["Texten som visas i terminalen", "Instruktionen som datorn följer", "Fönstret där resultatet visas", "Pythoninstallationen på datorn"], "b"],
    ["Vilken beskrivning visar bäst vad programmering innebär?", ["Att installera färdiga appar", "Att skriva kod utan att planera", "Att planera, skriva, testa och förbättra instruktioner", "Att låta datorn själv välja uppgift"], "c"],
    ["Koden <code>print(\"Hej\")</code> fungerar, men <code>Print(\"Hej\")</code> ger fel. Vad visar det?", ["Datorn följer kodens stavning och syntax exakt", "Python rättar automatiskt små skrivfel", "Versaler påverkar bara hur resultatet ser ut", "Program fungerar bara med små bokstäver"], "a"],
    ["Vilken ändring rättar syntaxfelet i <code>print(\"Hej)</code>?", ["Ta bort parenteserna", "Byt <code>print</code> mot <code>input</code>", "Lägg till ett kolon", "Lägg till det saknade citattecknet"], "d"],
    ["En Pythonfil körs rad för rad av Pythonmiljön. Hur beskrivs Python därför i kapitlet?", ["Som ett språk som bara används till spel", "Som ett interpreterat programspråk", "Som ett språk utan syntaxregler", "Som ren maskinkod"], "b"],
  ],
  2: [
    ["Efter <code>poang = 10</code> och sedan <code>poang = 15</code>, vilket värde innehåller variabeln?", ["15", "10", "25", "Texten poang"], "a"],
    ["Vilken datatyp har värdet i <code>namn = \"Ada\"</code>?", ["<code>int</code>", "<code>float</code>", "<code>bool</code>", "<code>str</code>"], "d"],
    ["Vad lagras i <code>svar</code> efter <code>svar = input(\"Ditt namn: \" )</code>?", ["Frågans längd", "Det användaren skriver som text", "Alltid ett heltal", "Datatypens namn"], "b"],
    ["Programmet ska addera användarens ålder med 1. Vilken rad läser in åldern på lämpligt sätt?", ["<code>alder = input + 1</code>", "<code>alder = str(input(\"Ålder: \"))</code>", "<code>alder = int(input(\"Ålder: \"))</code>", "<code>alder = type(input(\"Ålder: \"))</code>"], "c"],
    ["Vilket uttryck kan användas för att undersöka datatypen hos variabeln <code>pris</code>?", ["<code>input(pris)</code>", "<code>type(pris)</code>", "<code>str = pris</code>", "<code>print = pris</code>"], "b"],
  ],
  3: [
    ["En lärare vill ha ett program som räknar ut medelvärdet av tre prov. Vad är programmeringsproblemet?", ["Att ta emot tre resultat och beräkna deras medelvärde", "Att välja namn på Pythonfilen", "Att välja färg på terminalen", "Att installera om editorn"], "a"],
    ["Vilken algoritm beskriver bäst hur programmet ska räkna ut ett medelvärde?", ["Visa resultatet och läs sedan in talen", "Läs ett tal och avsluta alltid", "Addera talen utan att dela summan", "Läs talen, beräkna summan, dela med antalet och visa resultatet"], "d"],
    ["Ett bokningsprogram känns svårt att planera. Vilket är bästa nästa steg?", ["Skriva hela programmet utan plan", "Dela upp det i till exempel inmatning, kontroll och resultat", "Ta bort alla krav", "Byta programspråk innan problemet analyserats"], "b"],
    ["Vilken rad är pseudokod snarare än körbar Python?", ["<code>print(total)</code>", "<code>total = pris * antal</code>", "LÄS IN pris och antal", "<code>antal = int(input())</code>"], "c"],
    ["När en planerad lösning har översatts till kod, vad bör göras härnäst?", ["Anta att lösningen fungerar", "Radera planeringen", "Lägga till fler funktioner direkt", "Testa med olika indata och förbättra upptäckta brister"], "d"],
  ],
  4: [
    ["En bok kostar 120 kr och en penna 15 kr. Vilket uttryck beräknar totalpriset?", ["<code>120 * 15</code>", "<code>120 / 15</code>", "<code>120 + 15</code>", "<code>120 // 15</code>"], "c"],
    ["Vad blir värdet av <code>7 == 5 + 2</code>?", ["<code>True</code>", "<code>7</code>", "<code>False</code>", "<code>2</code>"], "a"],
    ["Sju kakor delas lika mellan två personer. Vilket uttryck ger antalet hela kakor per person?", ["<code>7 % 2</code>", "<code>7 / 2</code>", "<code>7 * 2</code>", "<code>7 // 2</code>"], "d"],
    ["Vilket uttryck räknar först ihop priserna och multiplicerar sedan med antalet?", ["<code>pris1 + pris2 * antal</code>", "<code>(pris1 + pris2) * antal</code>", "<code>pris1 + (pris2 * antal)</code>", "<code>pris1 * pris2 + antal</code>"], "b"],
    ["Vilket villkor är sant endast när <code>alder</code> är minst 18 och personen har biljett?", ["<code>alder >= 18 and har_biljett</code>", "<code>alder >= 18 or har_biljett</code>", "<code>alder == 18 and not har_biljett</code>", "<code>alder < 18 or har_biljett</code>"], "a"],
  ],
  5: [
    ["Programmet ska skriva \"Godkänd\" när <code>poang</code> är minst 10. Vilket villkor är rätt?", ["<code>if poang = 10:</code>", "<code>if poang >= 10:</code>", "<code>if poang < 10:</code>", "<code>if poang != 10:</code>"], "b"],
    ["Vad skrivs ut om <code>temperatur</code> är 5?<br><code>if temperatur &gt; 20: … else: print(\"Svalt\")</code>", ["Ingenting", "Både Varmt och Svalt", "Varmt", "Svalt"], "d"],
    ["Ett betygsprogram ska först kontrollera A, därefter C och annars E. Vilken struktur passar?", ["<code>if</code>, <code>elif</code>, <code>else</code>", "Tre <code>else</code>-block", "Enbart <code>print</code>", "En <code>while</code>-loop"], "a"],
    ["Varför måste <code>print(\"Vuxen\")</code> vara indragen under en <code>if</code>-sats?", ["För att göra texten kortare", "För att omvandla texten till bool", "För att visa att raden hör till villkorets kodblock", "För att villkoret ska bli ett heltal"], "c"],
    ["Vilket villkor accepterar en ålder från 13 till och med 19?", ["<code>alder < 13 and alder > 19</code>", "<code>alder >= 13 and alder <= 19</code>", "<code>alder == 13 or 19</code>", "<code>alder >= 13 or alder <= 19</code>"], "b"],
  ],
  6: [
    ["Ett meddelande ska skrivas ut fem gånger. Vilken lösning uttrycker upprepningen tydligast?", ["Fem olika variabler", "En <code>if</code>-sats", "Fem separata filer", "En loop med fem varv"], "d"],
    ["Programmet ska gå igenom talen 1–10. Vilken konstruktion passar bäst?", ["En <code>for</code>-loop med <code>range()</code>", "En <code>while</code>-loop vars villkor aldrig ändras", "En <code>if</code>-sats", "Ett enda <code>print</code>-anrop"], "a"],
    ["Vad behöver hända för att loopen <code>while saldo > 0:</code> ska kunna avslutas?", ["Variabeln måste byta namn", "Villkoret måste alltid vara sant", "<code>saldo</code> måste kunna ändras så villkoret blir falskt", "Koden måste sakna indrag"], "c"],
    ["Vilka värden får <code>i</code> i <code>for i in range(2, 5):</code>?", ["2, 3, 4, 5", "2, 3, 4", "1, 2, 3, 4", "3, 4, 5"], "b"],
    ["Varför blir <code>while antal < 5:</code> oändlig om <code>antal</code> aldrig ändras från 0?", ["<code>print()</code> saknas", "Variabeln är ett heltal", "Villkoret innehåller <code>&lt;</code>", "Villkoret fortsätter att vara sant"], "d"],
  ],
  7: [
    ["Ett program ska lagra fem temperaturer och bearbeta dem tillsammans. Vilken representation passar bäst?", ["Fem kommentarer", "En lista med fem värden", "Ett enda booleskt värde", "Ett filnamn"], "b"],
    ["Vad skrivs ut av <code>farger = [\"röd\", \"blå\", \"grön\"]</code> och <code>print(farger[0])</code>?", ["blå", "grön", "röd", "Ett indexfel"], "c"],
    ["Vilken rad lägger till <code>\"päron\"</code> sist i listan <code>frukter</code>?", ["<code>frukter.append(\"päron\")</code>", "<code>frukter[0] = \"päron\"</code>", "<code>append.frukter(\"päron\")</code>", "<code>frukter + append</code>"], "a"],
    ["Efter <code>tal = [4, 7, 9]</code>, vad ger <code>len(tal)</code>?", ["9", "2", "4", "3"], "d"],
    ["Vilken lösning bearbetar varje värde i listan <code>priser</code>?", ["<code>if priser:</code>", "<code>for pris in priser:</code>", "<code>print(priser[0])</code>", "<code>priser.append(priser)</code>"], "b"],
  ],
  8: [
    ["Samma beräkning används på flera ställen. Vilken lösning minskar upprepningen bäst?", ["Lägg beräkningen i en namngiven funktion", "Kopiera beräkningen fler gånger", "Lagra koden som en kommentar", "Byt varje variabel till en lista"], "a"],
    ["Vilken rad påbörjar definitionen av funktionen <code>halsa</code>?", ["<code>if halsa():</code>", "<code>for halsa():</code>", "<code>def halsa():</code>", "<code>print halsa():</code>"], "c"],
    ["I <code>def dubbla(tal):</code>, vilken roll har <code>tal</code>?", ["Det är funktionens returvärde", "Det är funktionsnamnet", "Det anropar funktionen", "Det är en parameter som tar emot ett värde"], "d"],
    ["Funktionen <code>dubbla(tal)</code> returnerar <code>tal * 2</code>. Vad får <code>svar</code> för värde efter <code>svar = dubbla(4)</code>?", ["4", "8", "2", "<code>None</code>"], "b"],
    ["Varför blir en funktion med ett tydligt ansvar ofta lättare att arbeta med?", ["Den blir lättare att läsa, testa och återanvända", "Den behöver aldrig anropas", "Den ersätter alla variabler", "Den kan inte innehålla fel"], "a"],
    ["Vilka resultat kan <code>random.randint(1, 3)</code> ge?", ["Bara 1 och 2", "Alla decimaltal mellan 1 och 3", "Heltalen 1, 2 eller 3", "Alltid 3"], "c"],
  ],
  9: [
    ["Koden <code>print(\"Hej\"</code> kan inte köras. Vilken feltyp är mest sannolik?", ["Logiskt fel", "Felaktigt testfall", "Syntaxfel", "Fel i programmets krav"], "c"],
    ["Ett program körs utan felmeddelande men räknar moms med fel procentsats. Vilken feltyp är det?", ["Logiskt fel", "Syntaxfel", "Importfel", "Indragsfel som stoppar körningen"], "a"],
    ["Ett felmeddelande pekar på rad 12. Vad är bästa första åtgärd?", ["Radera hela programmet", "Byt namn på alla variabler", "Testa fler funktioner samtidigt", "Läs feltypen och undersök rad 12 samt raderna precis före"], "d"],
    ["Vilket arbetssätt gör det lättast att hitta orsaken till ett fel?", ["Ändra många saker samtidigt", "Testa en avgränsad del och ändra en sak i taget", "Undvika att läsa felmeddelandet", "Bara testa med samma indata"], "b"],
    ["Vilka testdata ger bäst stöd för att ett åldersvillkor 18–65 fungerar?", ["Endast 30", "Endast 18", "Värden under, på och över gränserna", "Enbart texten \"ålder\""], "c"],
  ],
  10: [
    ["Vad händer när <code>int(\"hej\")</code> körs utan felhantering?", ["Texten blir 0", "Ett undantag uppstår under körningen", "Programmet får alltid värdet 1", "Python ändrar texten till ett tal"], "b"],
    ["Vilken kod ska placeras i ett <code>try</code>-block?", ["Bara kommentarer", "Kod som aldrig körs", "Endast funktionsdefinitioner", "Kod som kan orsaka undantaget som ska hanteras"], "d"],
    ["När körs ett passande <code>except</code>-block?", ["När ett matchande undantag uppstår i <code>try</code>-blocket", "Före varje rad i <code>try</code>", "Bara när programmet saknar fel", "Varje gång programmet startar"], "a"],
    ["Vilket beteende gör ett program som läser ett tal mer robust?", ["Det avslutas vid första felskrivningen", "Det antar att all inmatning är korrekt", "Det fångar felaktig inmatning och ber användaren försöka igen", "Det ignorerar även korrekt inmatning"], "c"],
    ["Vilket undantag bör fångas när <code>int(input())</code> får texten <code>tre</code>?", ["<code>NameError</code>", "<code>ValueError</code>", "<code>IndexError</code>", "<code>KeyError</code>"], "b"],
  ],
  11: [
    ["Vilket variabelnamn gör beräkningen <code>totalpris = pris * antal</code> lättast att förstå?", ["<code>x</code>", "<code>a1</code>", "<code>temp</code>", "<code>totalpris</code>"], "d"],
    ["När är en kommentar mest användbar?", ["När den förklarar varför en mindre självklar lösning används", "När den upprepar exakt vad varje kodrad säger", "När den ersätter tydliga variabelnamn", "När den innehåller gammal kod som inte används"], "a"],
    ["Ett långt program blandar inmatning, beräkning och utskrift. Vad förbättrar strukturen mest?", ["Ta bort alla tomrader", "Gör alla namn en bokstav långa", "Dela upp tydliga ansvarsområden i funktioner", "Placera allt på en enda rad"], "c"],
    ["Vilket kodexempel är mest läsbart?", ["<code>x=p*a</code>", "<code>totalpris = pris * antal</code>", "<code>t=pris*antal # t</code>", "<code>resultat1=pris*antal</code>"], "b"],
    ["Vilken funktion har tydligast ansvar?", ["En funktion som läser, räknar, visar och sparar allt", "En funktion med flera orelaterade uppgifter", "En funktion som ändrar globala variabler på många ställen", "En funktion som beräknar och returnerar totalpriset"], "d"],
  ],
  12: [
    ["Vilket gränssnitt är grafiskt?", ["Ett fönster med etiketter, inmatningsfält och knappar", "Enbart textkommandon i terminalen", "En Pythonlista med menyval", "Ett felmeddelande från tolken"], "a"],
    ["Ett Pythonprogram behöver ett fönster med widgets. Vilket verktyg från kapitlet passar?", ["<code>random</code>", "<code>range</code>", "Tkinter", "<code>type</code>"], "c"],
    ["Användaren ska starta en beräkning genom att klicka. Vilken widget passar?", ["<code>Label</code>", "<code>Entry</code>", "<code>Tk</code>", "<code>Button</code>"], "d"],
    ["Resultatet ska visas som text i fönstret. Vilken widget passar?", ["<code>Entry</code>", "<code>Label</code>", "<code>Button</code>", "<code>command</code>"], "b"],
    ["Vad är rätt sätt att koppla en knapp till funktionen <code>berakna</code>?", ["<code>command=berakna</code>", "<code>command=berakna()</code> när knappen skapas", "<code>text=berakna</code>", "<code>Label=berakna</code>"], "a"],
  ],
  13: [
    ["Ett program ska byggas för webbläsaren. Vad bör påverka valet av programspråk?", ["Språkets logotyp", "Vilket språk som har kortast namn", "Vilka språk och verktyg som stöder plattformen och uppgiften", "Att samma språk alltid är bäst"], "c"],
    ["Vilken ändring förbättrar tillgängligheten för en knapp?", ["Tydlig text, god kontrast och möjlighet att använda tangentbord", "Endast färg för att visa knappens betydelse", "Så liten text som möjligt", "Otydlig ikon utan beskrivning"], "a"],
    ["Ett program provar hur en kö utvecklas utan att störa en verklig butik. Vad används?", ["En kompilator", "En kommentar", "En filändelse", "En förenklad simulering av verkligheten"], "d"],
    ["Ett program visar ett beräknat framtidsscenario. Vad behöver användaren veta?", ["Att varje simulering är exakt", "Vilka antaganden modellen bygger på och hur resultatet ska tolkas", "Att programmeringsspråket avgör sanningen", "Att resultat aldrig behöver kontrolleras"], "b"],
    ["Varför behöver programmerare fortsätta lära sig nya arbetssätt?", ["Syntax försvinner helt", "Alla gamla program slutar omedelbart", "Verktyg, bibliotek, AI och plattformar förändras", "Problemlösning behövs inte längre"], "c"],
  ],
  14: [
    ["En grupp ska bygga en bokningsapp. Vad bör de göra först?", ["Börja koda alla detaljer", "Klargöra problem, användare och mål", "Välja färger innan kraven", "Skriva slutrapporten"], "b"],
    ["Vilket är ett tydligt funktionellt krav?", ["Appen ska kännas modern", "Koden ska vara trevlig", "Projektet ska bli bra", "Användaren ska kunna skapa och avboka en bokning"], "d"],
    ["Vilket beslut hör främst till designfasen?", ["Hur programmets delar och gränssnitt ska utformas", "Om alla tester är godkända", "Vilka fel som upptäcktes efter leverans", "Hur den färdiga koden redovisas"], "a"],
    ["Vilket test ger bäst stöd för att ett inmatningsfält för antal fungerar?", ["Testa bara ett normalt värde", "Läsa koden utan att köra", "Testa normala värden, gränsvärden och felaktig inmatning", "Fråga om färgen ser bra ut"], "c"],
    ["Vad bör projektdokumentationen göra?", ["Enbart visa slutresultatets färg", "Beskriva krav, viktiga val, testning och hur lösningen används", "Ersätta all källkod", "Dölja problem som uppstod"], "b"],
  ],
  15: [
    ["En kommun automatiserar handläggning med programvara. Varför är programmeringen samhällsviktig?", ["Datorer används inte i beslut", "Alla digitala system är spel", "Koden påverkar tjänster, arbetssätt och människors vardag", "Program saknar regler"], "c"],
    ["Ett AI-system ska känna igen bilder. Vilka delar behövs typiskt?", ["Programmering, data och algoritmer", "Bara slumpmässiga bilder", "Enbart pappersutskrifter", "Instruktioner utan data"], "a"],
    ["En app samlar in fler personuppgifter än den behöver. Vilken etisk fråga är tydligast?", ["Val av teckensnitt", "Tangentbordets hastighet", "Filens namn", "Användarnas integritet och hur uppgifterna hanteras"], "d"],
    ["Ett AI-system tränas nästan bara på data från en grupp. Vilken risk bör undersökas?", ["Att all kod blir kortare", "Att resultaten blir missvisande eller orättvisa för andra grupper", "Att datorn slutar behöva el", "Att alla automatiskt får samma korrekta resultat"], "b"],
    ["Varför har programmerare ansvar även när programmet tekniskt fungerar?", ["Testning är förbjuden", "Användare påverkas aldrig", "Systemets användning kan få konsekvenser för människor och samhälle", "Variabler behövs inte"], "c"],
  ],
  16: [
    ["Två ändringar gör att programmet slutar fungera. Hur hjälper versionshantering?", ["Den garanterar felfri kod", "Den raderar all historik", "Den installerar Python", "Den gör det möjligt att se och återgå till tidigare versioner"], "d"],
    ["Vilket verktyg används lokalt för att registrera filändringar över tid?", ["Git", "Tkinter", "PyInstaller", "IDLE-temat"], "a"],
    ["Vilken beskrivning skiljer GitHub från Git?", ["GitHub är ett Pythonkommando", "GitHub kör bara Tkinterappar", "GitHub är en tjänst för att lagra och dela Git-projekt", "GitHub ersätter projektets filer"], "c"],
    ["Vad innehåller ett repository?", ["En enda skärmbild", "Projektfiler och deras versionshistorik", "Bara lösenord", "Enbart färdig körbar kod"], "b"],
    ["Vilken information är mest hjälpsam i <code>README.md</code>?", ["Slumpmässiga testvärden", "Datorns alla filer", "En kopia av varje kodrad", "Projektets syfte, användning och viktiga instruktioner"], "d"],
  ],
  17: [
    ["Vad är målet med att använda PyInstaller på Tkinterprogrammet?", ["Att översätta gränssnittet till HTML", "Att paketera programmet som en körbar app", "Att skapa ett Git-repository", "Att ersätta programmets funktioner"], "b"],
    ["Var körs kommandot som startar PyInstaller enligt kapitlets arbetsgång?", ["I en <code>Label</code>", "I Pythonlistan", "I terminalen", "I appens knapp"], "c"],
    ["Varför måste den paketerade appen testas separat?", ["Filer, sökvägar och körmiljö kan fungera annorlunda efter paketering", "Pythonfilen kan aldrig innehålla fel", "Paketering testar automatiskt alla funktioner", "Appen använder inte längre kod"], "a"],
    ["Appen hittar inte en bildfil. Vilken uppgift är viktigast att kontrollera?", ["Bildens motiv", "Antalet funktioner", "README-filens längd", "Sökvägen till filen i den paketerade appen"], "d"],
    ["Vad behöver ofta följa med utöver programkoden?", ["Alla filer på datorn", "Bilder och andra resurser som programmet använder", "Pythonkursens alla kapitel", "Terminalens historik"], "b"],
  ],
  18: [
    ["Vilken arbetsgång passar ett programmeringsprojekt inom Teknik 2 bäst?", ["Planera, formulera krav, designa, implementera, testa och dokumentera", "Koda först och bestäm problemet sist", "Testa utan krav eller mål", "Dokumentera utan att bygga"], "a"],
    ["En växtvattningsapp ska varna när jorden är torr. Vilket påstående är ett krav?", ["Programmet skrivs i en fil", "Projektgruppen gillar grönt", "Koden ska innehålla många rader", "Appen ska visa en varning när mätvärdet passerar gränsen"], "d"],
    ["Vilket är en projektrisk som bör planeras för?", ["Att projektet har ett mål", "Att sensordata kan saknas eller vara felaktiga", "Att lösningen testas", "Att användaren får instruktioner"], "b"],
    ["Hur testas bäst att ett beräknat resultat är rimligt?", ["Testa bara en gång", "Kontrollera bara att fönstret öppnas", "Jämför flera kända testfall, inklusive gränsfall, med förväntade resultat", "Utgå från att kod utan syntaxfel räknar rätt"], "c"],
    ["Vad är huvudsyftet med en projektchecklista?", ["Att systematiskt kontrollera att viktiga steg och krav inte glöms", "Att ersätta kravspecifikationen", "Att garantera högsta betyg", "Att undvika dokumentation"], "a"],
  ],
};

function applyImprovedChapterQuiz() {
  const match = window.location.pathname.match(/chapter-(\d+)\.html$/);
  if (!match) return;

  const questions = IMPROVED_CHAPTER_QUIZZES[Number(match[1])];
  const quiz = document.querySelector("form.chapter-quiz, form[id^='chapter-'][id$='-quiz']");
  if (!questions || !quiz) return;

  const fieldsets = [...quiz.querySelectorAll("fieldset")];
  if (fieldsets.length !== questions.length) {
    console.error("Quiz question count does not match the chapter question bank.");
    return;
  }

  fieldsets.forEach((fieldset, index) => {
    const [stem, options, correct] = questions[index];
    const inputs = [...fieldset.querySelectorAll("input[type='radio']")];
    const name = inputs[0]?.name;
    if (!name || inputs.length !== options.length) return;

    fieldset.querySelector("legend").innerHTML = `${index + 1}. ${stem}`;
    fieldset.querySelectorAll("label").forEach((label, optionIndex) => {
      const input = label.querySelector("input");
      label.replaceChildren(input, document.createTextNode(" "));
      label.insertAdjacentHTML("beforeend", options[optionIndex]);
    });

    if (fieldset.hasAttribute("data-correct")) {
      fieldset.dataset.correct = correct;
      const correctIndex = correct.charCodeAt(0) - 97;
      const correctText = fieldset.querySelectorAll("label")[correctIndex].textContent.trim();
      fieldset.dataset.explanation = `Rätt svar är: ${correctText}. Det följer av begreppen och exemplen i kapitlet.`;
    }
  });
}

applyImprovedChapterQuiz();

function addQuizStatisticsNotice(quiz) {
  if (!isQuizStatisticsEnabled() || quiz.querySelector(".quiz-statistics-notice")) {
    return;
  }

  const notice = document.createElement("p");
  notice.className = "quiz-statistics-notice";
  notice.textContent = "Anonyma svar används för att förbättra quizet.";
  quiz.prepend(notice);
}

document.querySelectorAll("form[id^='chapter-'][id$='-quiz']").forEach(addQuizStatisticsNotice);

document.querySelectorAll(".chapter-quiz").forEach((quiz) => {
  const button = quiz.querySelector(".check-quiz");
  const result = quiz.querySelector(".quiz-result");

  if (!button || !result) {
    return;
  }

  addQuizStatisticsNotice(quiz);

  button.addEventListener("click", () => {
    const questions = quiz.querySelectorAll("fieldset[data-correct]");
    let score = 0;
    const feedback = [];
    const statisticsAnswers = [];

    questions.forEach((question, index) => {
      const selected = question.querySelector("input[type='radio']:checked");
      const correct = question.dataset.correct;
      const explanation = question.dataset.explanation;
      const isCorrect = Boolean(selected && selected.value === correct);

      statisticsAnswers.push({
        questionNumber: index + 1,
        questionText: getQuestionText(question),
        selectedAnswer: selected ? selected.value : "",
        correctAnswer: correct,
        isCorrect,
      });

      if (isCorrect) {
        score += 1;
      } else {
        feedback.push(`<li>Fråga ${index + 1}: ${explanation}</li>`);
      }
    });

    const feedbackHtml = feedback.length > 0
      ? `<p>Förklaringar till fel eller obesvarade frågor:</p><ul>${feedback.join("")}</ul>`
      : "<p>Alla svar är rätt.</p>";

    result.innerHTML = `<h3>Resultat: ${score} av ${questions.length} rätt</h3>${feedbackHtml}`;
    sendQuizStatistics(quiz, statisticsAnswers);
  });
});
