# Pedagogisk och Teoretisk Analys: Programmering 1 i Python

Analys och kritisk granskning av kurswebbplatsen [Programmering 1 i Python](https://paul-pauliskolan.github.io/prog1-python/index.html) förankrad i teorier, modeller och empirisk forskning från kursen **PDA681: Lärande, kommunikation och IT** vid Göteborgs universitet.

---

## 1. Starka Pedagogiska Sidor (Positiv Grund)

* **Kognitiv progression (Ertmer & Newby, 2013):** Logisk övergång från fakta och grundläggande syntax (*knowing what*) till funktioner och algoritmiskt tänkande (*knowing how*).
* **Lösta exempel (Sweller, 2019):** Användningen av färdiga, förklarade kodexempel minskar inledande kognitiv belastning för nybörjare genom att avlasta arbetsminnet.
* **Instruktionsprinciper (Rosenshine, 2012):** Innehållet presenteras i korta, avgränsade lektionssteg med omedelbar möjlighet till praktisk kodträning.

---

## 2. Kritiska Utvecklingsområden (Vetenskaplig Granskning)

### A. Saknar Affordanser för Digitalt Samarbete (CSCL)
* **Teoretisk grund:** Jeong & Hmelo-Silver (2016); Feyzi Behnagh & Yasrebi (2020).
* **Problematik:** Webbplatsen är utformad som en ren envägskanal för enskilt studerande (sololärande). Det saknas teknologiska affordanser för samkonstruktion av kunskap (*co-construction*), delning av resurser och kollektiv reglering (*Socially Shared Regulation of Learning – SSRL*).
* **Åtgärdsförslag:** Bygg in ytor för parprogrammering, kamratåterkoppling (*peer review*) på koden via exempelvis GitHub/Replit, eller gemensamma forum för felsökning.

### B. Risk för Passiv Bearbetning och "Illusion av Kompetens"
* **Teoretisk grund:** Sweller (2019); Rosenshine (2012).
* **Problematik:** Att läsa färdigförklarad kod är kognitivt mycket lättare än att skriva koden själv från grunden. Elever drabbas lätt av en falsk känsla av att de behärskar programmeringen (*illusion of competence*).
* **Åtgärdsförslag:** Komplettera de lösta exemplen med **kompletteringsuppgifter** (*completion problems / fading scaffolds*), där elever tvingas fylla i saknade kodrader, förutsäga kodes utfall innan körning, eller genomföra riktade felsökningsövningar (*debugging*).

### C. Saknar Stöd för Självreglerat Lärande (SRL)
* **Teoretisk grund:** Kizilcec et al. (2017); Zimmerman (Woolfolk & Karlberg, kap. 10).
* **Problematik:** Sidan tillhandahåller innehåll men stödjer inte eleven i att aktivt planera, övervaka och utvärdera sin egen studieprocess (*forethought, performance, self-reflection*).
* **Åtgärdsförslag:** Lägg till självvärderingschecklistor inför varje modul, tydliga målsättningsmallar samt formativa självtester som uppmuntrar elever att återbesöka och göra om tidigare övningar (vilket Kizilcec et al. visar är avgörande för framgång i digitala lärmiljöer).

### D. Risk för "Expertise Reversal Effect" hos Avancerade Elever
* **Teoretisk grund:** Sweller (2019 – Kognitiv belastningsteori).
* **Problematik:** En strikt linjär, detaljstyrd struktur tvingar elever med tidigare programmeringserfarenhet att gå igenom grundläggande stöttor (*scaffolding*), vilket skapar redundans, frustration och extra kognitiv belastning för dessa elever.
* **Åtgärdsförslag:** Erbjud "snabbspår" eller diagnostiska förtester i början av varje modul så att elever med högre förkunskaper kan hoppa direkt till mer avancerade utmaningar.

### E. Begränsad Konstruktivistisk Höjd (*Ill-Defined Problems*)
* **Teoretisk grund:** Ertmer & Newby (2013); Windschitl (Woolfolk & Karlberg, kap. 9).
* **Problematik:** De flesta övningar är avgränsade och välstrukturerade (*well-defined*). Detta tränar *knowing what* och *knowing how*, men förbereder inte eleverna för mer komplex, verklighetsnära problemlösning (*reflection-in-action*).
* **Åtgärdsförslag:** Inför öppna, "smutsiga" och ostrukturerade projektuppgifter (*ill-defined problems*) där eleverna själva tvingas definiera problemets ramar, välja lämpliga datastrukturer och förhandla fram lösningar.

---

## 3. Sammanfattande Rekommendationer för Undervisningsdesign

1. **Integrera CSCL-element:** Inkludera strukturerad parprogrammering och kodgranskning.
2. **Inför Fading Scaffolds:** Stega från lösta exempel $\rightarrow$ kompletteringsuppgifter $\rightarrow$ fri kodning.
3. **Bygg in SRL-stöd:** Ersätt passiv läsning med självvärderings- och målsättningsmatriser.
4. **Skapa adaptiva vägar:** Erbjud snabbspår/diagnostiska test för att undvika *expertise reversal effect*.
5. **Erbjud öppna projekt:** Avsluta modulerna med konstruktivistiska, ostrukturerade slutprojekt.
