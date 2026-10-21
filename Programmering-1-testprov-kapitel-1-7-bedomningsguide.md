# Programmering 1 – testprov kapitel 1–7: bedömningsguide

## 1. Provöversikt

- **Provnamn:** Testprov – Programmering 1, kapitel 1–7
- **Version:** 1.0 (2026-10-21)
- **Kapitel:** 1–7
- **Antal frågor:** 20
- **Rekommenderad provtid:** 35–45 minuter
- **Format:** Digitalt flervalsprov med en fråga i taget

Poänggränserna nedan är stöd för återkoppling, inte automatisk betygssättning:

| Resultat | Återkopplingsstöd |
|---|---|
| 17–20 rätt | God överblick. Följ upp enskilda fel och kontrollera kunskapen igen senare. |
| 13–16 rätt | Flera grunder fungerar. Repetera kapitlen där felen samlas. |
| 9–12 rätt | Viktiga delar behöver befästas med korta kodövningar och ny kontroll. |
| 0–8 rätt | Gör en strukturerad repetition kapitel för kapitel med lärarstöd. |

Ett enskilt resultat ska inte tolkas som permanent behärskning. Bedöm tillsammans med elevens resonemang, kodarbete och senare kontroller.

### Kort allmän sammanställning efter provet

Sammanställ först antalet fel per kapitel och prioritera de högst placerade områdena. Beskriv vad eleven behöver träna på med konkreta kunskaper och handlingar, inte personliga egenskaper.

| Om felen främst finns i | Eleven behöver öva mer på | Rekommenderad repetition |
|---|---|---|
| Kapitel 1 | Körordning, text kontra uttryck och enkel syntax | Förutsäg utskriften från korta program och rätta citattecken- och parentesfel. |
| Kapitel 2 | Datatyper, tilldelning, `input()` och typomvandling | Skriv små inmatningsprogram som räknar med heltal och decimaltal. |
| Kapitel 3 | Pseudokod, informationsflöde och testfall | Planera lösningar före kod och testa under, på och över viktiga gränser. |
| Kapitel 4 | Operatorer, prioriteringsregler och logiska uttryck | Räkna för hand med `/`, `//` och `%` och jämför uttryck med och utan parenteser. |
| Kapitel 5 | Villkorsflöde, intervall, `and`/`or` och indrag | Spåra `if`–`elif`–`else` rad för rad och prova gränsvärden. |
| Kapitel 6 | `range`, avslutningsvillkor och ackumulatorer | Gör spårtabeller för loopar och kontrollera hur styrvariabel och summa ändras. |
| Kapitel 7 | Index, negativa index och bearbetning av listor | Hämta och ändra listvärden och skriv loopar som räknar utvalda värden. |

Exempel på kort återkoppling:

> Du behöver främst öva mer på kapitel [X], [Y] och [Z]. Börja med området där du hade flest fel. Gör de rekommenderade kortövningarna och avsluta med nya kontrollfrågor eller kodexempel, så att kontrollen mäter förståelse i stället för minnet av provsvaren.

## 2. Facit

| Fråga | Kapitel | Kunskapsområde | Rätt svar | Kort förklaring |
|---:|---:|---|---|---|
| 1 | 1 | Program och körordning | Start, 3 + 4, 7 | Text i citattecken skrivs bokstavligt; det sista uttrycket beräknas. |
| 2 | 1 | Syntax och felsökning | Lägg till avslutande citattecken | En sträng måste ha matchande citattecken. |
| 3 | 1 | Programmeringsprocessen | Förstå, planera, koda, testa, förbättra | En fungerande process börjar med problemet och innehåller testning. |
| 4 | 2 | Variabler och datatyper | int, float, str, bool | Värdenas form bestämmer datatypen. |
| 5 | 2 | Input och typomvandling | `alder = int(input("Ålder: "))` | `input()` ger text som måste omvandlas före addition. |
| 6 | 2 | Tilldelning | 10 | Senare ändring av `bonus` ändrar inte redan beräknad `poang`. |
| 7 | 3 | Algoritmer och pseudokod | Läs A och B, jämför, skriv största | Pseudokod beskriver lösningssteg utan exakt syntax. |
| 8 | 3 | Indata, bearbetning, utdata | `rabattpris = ordinarie_pris * 0.8` | Beräkningen är bearbetningssteget. |
| 9 | 3 | Testning och gränsvärden | -1, 0 och 1 | Serien testar under, på och över gränsen. |
| 10 | 4 | Heltalsdivision och modulo | 3 och 2 | `//` ger heltalskvot och `%` resten. |
| 11 | 4 | Prioriteringsregler | `(a + b + c) / 3` | Parentesen gör att summan räknas före divisionen. |
| 12 | 4 | Jämförelser och logik | True | Båda delvillkoren är sanna. |
| 13 | 5 | if, elif och else | Mellan | Första sanna grenen körs. |
| 14 | 5 | Logiska villkor | `alder >= 16 and alder < 20` | Båda gränserna måste gälla samtidigt. |
| 15 | 5 | Indrag och villkorsblock | Sista raden ligger utanför if-blocket | Oindragen kod körs oberoende av villkoret. |
| 16 | 6 | for och range | 3, 5, 7, 9 | Start 3, steg 2, stoppvärdet 10 ingår inte. |
| 17 | 6 | while och avslutningsvillkor | Lägg till `raknare += 1` i loopen | Styrvariabeln måste förändras för att loopen ska avslutas. |
| 18 | 6 | Ackumulator | 10 | Summan byggs upp av 1 + 2 + 3 + 4. |
| 19 | 7 | Index och ändring | grön och `["röd", "gul", "grön"]` | Index 1 ändras; index -1 är sista värdet. |
| 20 | 7 | Listor, loopar och villkor | Räknare som ökas när `varde > 10` | Ett villkor i loopen avgör när räknaren ska ökas. |

## 3. Feldiagnos fråga för fråga

| Fråga | Kapitel | Om eleven svarar fel kan det tyda på | Eleven bör öva på | Rekommenderad aktivitet |
|---:|---:|---|---|---|
| 1 | 1 | Blandar ihop text och uttryck eller följer inte körordningen. | `print`, citattecken och radvis körning. | Förutsäg tre korta programs utskrift och kontrollkör. |
| 2 | 1 | Känner inte igen hur strängar avgränsas eller tolkar felet som symptom. | Matchande citattecken och enkla syntaxfel. | Rätta fem enradiga program med ett syntaxfel vardera. |
| 3 | 1 | Börjar koda innan krav och lösningssteg är tydliga. | Programmeringsprocessens ordning. | Planera ett vardagsproblem i fem steg innan kod skrivs. |
| 4 | 2 | Blandar ihop `int`, `float`, `str` och `bool`. | Datatyper och `type()`. | Sortera tio värden efter datatyp och verifiera med `type()`. |
| 5 | 2 | Glömmer att `input()` returnerar text. | Typomvandling med `int()` och `float()`. | Skriv två inmatningsprogram som räknar med heltal respektive decimaltal. |
| 6 | 2 | Ser variabler som permanent sammankopplade i stället för tilldelade värden. | Tilldelning och stegvis värdeförändring. | Gör en spårtabell rad för rad för tre variabler. |
| 7 | 3 | Blandar pseudokod med färdig kod eller missar jämförelsesteget. | Algoritm och pseudokod. | Skriv pseudokod för minsta av tre tal. |
| 8 | 3 | Blandar ihop indata, bearbetning och utdata. | Programmets informationsflöde. | Märk upp rader i ett kort program som I, B eller U. |
| 9 | 3 | Testar bara typiska värden och missar gränsvärden. | Testfall kring en beslutsgräns. | Skapa testfall för åldersgränsen 18: under, exakt och över. |
| 10 | 4 | Blandar ihop vanlig division, heltalsdivision och modulo. | `/`, `//` och `%`. | Beräkna kvot och rest för fem talpar, sedan kontrollkör. |
| 11 | 4 | Följer inte prioriteringsregler eller placerar parenteser fel. | Operatorprioritet och medelvärde. | Jämför uttryck med och utan parenteser. |
| 12 | 4 | Har svårt att avgöra när ett sammansatt villkor är sant. | Jämförelser, `and` och booleska värden. | Gör en sanningsvärdestabell för fyra kombinationer. |
| 13 | 5 | Tror att flera grenar körs eller läser villkoren i fel ordning. | Flödet i `if`–`elif`–`else`. | Spåra tre poängvärden genom samma villkorskedja. |
| 14 | 5 | Blandar ihop `and` och `or` eller inkluderande gränser. | Intervallvillkor. | Skriv villkor för tre intervall och testa gränsvärden. |
| 15 | 5 | Förstår inte hur indrag avgränsar kodblock. | Indrag i villkor. | Indrag ett blandat kodblock och förklara vilka rader som är villkorade. |
| 16 | 6 | Tror att stoppvärdet i `range` ingår eller missar steglängden. | `range(start, stopp, steg)`. | Skriv ut tre talföljder, inklusive en med negativt steg. |
| 17 | 6 | Förstår inte loopens avslutningsvillkor eller glömmer styrvariabeln. | `while`, villkor och uppdatering. | Rätta två oändliga loopar och motivera ändringen. |
| 18 | 6 | Följer inte hur en ackumulator ändras mellan varven. | Räknare, summa och spårtabell. | Fyll i värdet på `summa` efter varje loopvarv. |
| 19 | 7 | Räknar index från 1 eller missförstår negativt index. | Index, ändring och `-1`. | Hämta och ändra värden i en lista med fyra element. |
| 20 | 7 | Blandar ihop listans värden, antal element och villkorad räkning. | Loop över lista med villkor och räknare. | Räkna positiva tal i en lista utan `len()` som genväg. |

## 4. Sammanfattning per kapitel

### Kapitel 1 – Vad är programmering

- **Frågor:** 1–3
- **Vanliga fel:** blandar text med uttryck, missar citattecken, hoppar över planering och testning.
- **Repetera:** program, Python-tolk, syntax, körordning och programmeringsprocess.
- **Kort repetitionsövning:** Förutsäg och kör ett program med två textutskrifter och en beräkning. Lägg sedan in och rätta ett citatteckensfel.
- **Ny kontrollfråga:** Varför skriver `print("5 * 2")` inte ut 10, och hur ändrar du raden så att 10 skrivs ut?

### Kapitel 2 – Variabler, datatyper och input

- **Frågor:** 4–6
- **Vanliga fel:** blandar datatyper, glömmer typomvandling, tror att variabler hålls automatiskt synkroniserade.
- **Repetera:** tilldelning, `int`, `float`, `str`, `bool`, `input()` och f-strängar.
- **Kort repetitionsövning:** Läs in antal och styckpris, räkna totalpris och skriv en tydlig f-sträng.
- **Ny kontrollfråga:** Vad blir skillnaden mellan `"8" + "2"` och `int("8") + int("2")`?

### Kapitel 3 – Problemlösning i programmering

- **Frågor:** 7–9
- **Vanliga fel:** pseudokod blir för vag, informationsflödet blandas ihop, bara normala testvärden används.
- **Repetera:** algoritmer, pseudokod, indata–bearbetning–utdata och testfall.
- **Kort repetitionsövning:** Planera ett program som omvandlar centimeter till meter och skriv tre testfall.
- **Ny kontrollfråga:** Vilka testvärden bör användas när ett program ska skilja mellan negativa tal, noll och positiva tal?

### Kapitel 4 – Operatorer och beräkningar

- **Frågor:** 10–12
- **Vanliga fel:** blandar `//` och `%`, missar parenteser, misstolkar `and`.
- **Repetera:** aritmetiska operatorer, operatorprioritet, jämförelser och logiska uttryck.
- **Kort repetitionsövning:** Skriv ett program som omvandlar ett antal sekunder till hela minuter och resterande sekunder.
- **Ny kontrollfråga:** Vad blir `23 // 4` respektive `23 % 4`, och hur kan resultaten tolkas?

### Kapitel 5 – Villkor

- **Frågor:** 13–15
- **Vanliga fel:** tror att flera grenar körs, blandar `and`/`or`, missar indrag.
- **Repetera:** `if`, `elif`, `else`, intervall och kodblock.
- **Kort repetitionsövning:** Klassificera en temperatur som minus, noll eller plus och testa tre gränsnära värden.
- **Ny kontrollfråga:** Vilket villkor testar att `poang` ligger från och med 50 till och med 75?

### Kapitel 6 – Loopar

- **Frågor:** 16–18
- **Vanliga fel:** tar med stoppvärdet, skapar oändlig `while`-loop, återställer ackumulatorn i loopen.
- **Repetera:** `for`, `while`, `range`, räknare, ackumulator och avslutningsvillkor.
- **Kort repetitionsövning:** Summera alla jämna tal från 2 till och med 20 och skriv ut summan efter loopen.
- **Ny kontrollfråga:** Vilka värden ger `range(8, 1, -2)`, och varför ingår inte 1?

### Kapitel 7 – Listor

- **Frågor:** 19–20
- **Vanliga fel:** räknar index från 1, blandar element med index, räknar alla värden i stället för matchande värden.
- **Repetera:** listskapande, index, ändring, `append`, loopar och bearbetning.
- **Kort repetitionsövning:** Lägg tre temperaturer i en lista, lägg till en fjärde och räkna hur många som är under noll.
- **Ny kontrollfråga:** Vad skriver `print(namn[-2])` ut om `namn = ["Ali", "Bo", "Cleo", "Dani"]`?

## 5. Mall för en individuell elevsammanfattning

# Resultatsammanfattning – Programmering 1

**Elev:**  
**Datum:**  
**Resultat:** __ / 20

## Styrkor

- 

## Frågor att följa upp

| Fråga | Kapitel | Observerat fel | Trolig kunskapslucka |
|---|---|---|---|
| | | | |

## Kapitel att repetera

1. 
2. 
3. 

## Rekommenderad träning

- 
- 
- 

## Nästa kontroll

- **Vad ska kontrolleras?**
- **När?**
- **Hur?**
