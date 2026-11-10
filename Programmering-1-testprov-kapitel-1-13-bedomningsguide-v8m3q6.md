# Bedömningsguide – Programmering 1, kapitel 1–13

20 frågor, en poäng per fråga. Resultatet används som repetitionsstöd, inte automatisk betygssättning. Komplettera med elevens egna kodlösningar och förklaringar. Alla frågor och alternativ slumpas vid start; därför är facit nedan angivet med stabilt fråge-ID och svarstext, inte elevens frågenummer eller bokstav.

## Frågefördelning

| Kapitel | Innehåll | Antal |
| --- | --- | ---: |
| 1 | Vad är programmering | 1 |
| 2 | Variabler, datatyper och input | 2 |
| 3 | Problemlösning i programmering | 1 |
| 4 | Operatorer och beräkningar | 1 |
| 5 | Villkor | 2 |
| 6 | Loopar | 2 |
| 7 | Listor | 1 |
| 8 | Funktioner och random | 2 |
| 9 | Felsökning | 1 |
| 10 | Undantagshantering | 2 |
| 11 | Struktur och läsbar kod | 1 |
| 12 | Användargränssnitt | 2 |
| 13 | Programmering, användare och framtid | 2 |

Typer: Begrepp: 3, Felsökning: 4, Kodförståelse: 8, Tillämpning: 5.

## Källor och avgränsning

Frågorna bygger på `chapters/chapter-1.html` till `chapters/chapter-13.html`. Inspiration: de 200 övningsfrågorna i `js/ova-prov.js` och snabbfrågorna i `snabbfragor/slumpfragor.js`. Exempel och formuleringar är nya. Kapitel 13 prövas översiktligt genom användarperspektiv och simuleringsmodeller; klassimplementation, senare projektkapitel och avancerade datastrukturer ingår inte.

## Facit och återkoppling

### p1-13-01 · Kapitel 1: syntax och text

**Typ:** Begrepp

Vad betyder tecknen \n inuti textsträngen?

```python
print("Norr\nSöder")
```

A. En radbrytning i utskriften.
B. Bokstäverna n och n skrivs ut.
C. Programmet avslutas.
D. Texten efter tecknen blir en kommentar.

**Rätt svar:** En radbrytning i utskriften.

**Förklaring:** \n är en escape-sekvens som ger en ny rad i texten.

**Vanlig missuppfattning:** Att specialtecken alltid skrivs ut bokstavligt.

**Repetition:** Skriv en utskrift med radbrytning och förklara skillnaden mellan text och kod.

### p1-13-02 · Kapitel 2: input och typomvandling

**Typ:** Felsökning

Användaren skriver 7. Programmet ska visa 21 men visar 777. Vilken ändring behövs?

```python
antal = input("Antal: ")
print(antal * 3)
```

A. Byt första raden till antal = int(input("Antal: ")).
B. Byt 3 mot "3".
C. Byt print mot input.
D. Lägg till citattecken runt antal i sista raden.

**Rätt svar:** Byt första raden till antal = int(input("Antal: ")).

**Förklaring:** input ger text. Text gånger 3 upprepar texten; int omvandlar den till ett heltal före multiplikationen.

**Vanlig missuppfattning:** Att siffertext automatiskt blir ett tal.

**Repetition:** Läs in ett antal, kontrollera typen med type() och jämför textupprepning med multiplikation efter int().

### p1-13-03 · Kapitel 2: tilldelning och datatyper

**Typ:** Kodförståelse

Vad skrivs ut?

```python
antal = 9
kopior = antal
antal = 6
klar = False
print(kopior, klar)
```

A. 9 och False
B. 6 och False
C. 9 och True
D. Programmet ger fel vid tilldelningen.

**Rätt svar:** 9 och False

**Förklaring:** kopior får det dåvarande heltalsvärdet 9. Att senare ändra antal ändrar inte kopior; False är ett booleskt värde.

**Vanlig missuppfattning:** Att en tilldelning skapar en bestående koppling mellan variabler.

**Repetition:** Läs in ett antal, kontrollera typen med type() och jämför textupprepning med multiplikation efter int().

### p1-13-04 · Kapitel 3: algoritmer och problemlösning

**Typ:** Tillämpning

Ett program ska beräkna hur många hela lådor med 6 muggar som kan fyllas. Vilken pseudokod beskriver rätt lösning?

A. Läs antal muggar; heltalsdividera antalet med 6; skriv ut antalet hela lådor.
B. Läs antal muggar; multiplicera med 6; skriv ut resultatet.
C. Skriv ut 6; läs antal muggar; avsluta.
D. Läs antal muggar; dividera 6 med antalet; avrunda uppåt.

**Rätt svar:** Läs antal muggar; heltalsdividera antalet med 6; skriv ut antalet hela lådor.

**Förklaring:** En algoritm beskriver lösningens steg. Heltalsdivision av antalet muggar med 6 ger antalet helt fyllda lådor.

**Vanlig missuppfattning:** Att välja en beräkning innan man har förstått vad resultatet ska representera.

**Repetition:** Skriv pseudokod för att packa föremål i lådor och kontrollera med ett exempel som ger en rest.

### p1-13-05 · Kapitel 4: operatorer och prioritet

**Typ:** Kodförståelse

Vad skrivs ut?

```python
print(4 + 2 * 3)
print(23 % 4)
```

A. 10 och 3
B. 10 och 5
C. 16 och 3
D. 16 och 5

**Rätt svar:** 10 och 3

**Förklaring:** Multiplikation utförs före addition: 4 + 6 = 10. Resten vid 23 delat med 4 är 3.

**Vanlig missuppfattning:** Att alla uttryck räknas strikt från vänster eller att % ger kvoten.

**Repetition:** Beräkna uttryck med *, + och % för hand och kontrollera dem sedan i Python.

### p1-13-06 · Kapitel 5: if och elif

**Typ:** Kodförståelse

Vilken text skrivs ut?

```python
minuter = 24
if minuter < 15:
    print("Snabb")
elif minuter < 30:
    print("Kort")
else:
    print("Lång")
```

A. Kort
B. Snabb och Kort
C. Lång
D. Ingen text

**Rätt svar:** Kort

**Förklaring:** Första villkoret är falskt och elif-villkoret är sant. Bara Kort skrivs ut.

**Vanlig missuppfattning:** Att alla grenar i en if–elif–else-sats körs.

**Repetition:** Gör en spårtabell för if–elif–else och testa värden under, på och över båda intervallgränserna.

### p1-13-07 · Kapitel 5: intervall och logik

**Typ:** Tillämpning

En sensor ska visa OK från och med 8 till och med 12 grader. Vilket villkor ska ersätta frågetecknen?

```python
if ???:
    print("OK")
```

A. temperatur >= 8 and temperatur <= 12
B. temperatur >= 8 or temperatur <= 12
C. temperatur > 8 and temperatur < 12
D. temperatur <= 8 and temperatur >= 12

**Rätt svar:** temperatur >= 8 and temperatur <= 12

**Förklaring:** Båda gränserna måste gälla samtidigt. >= och <= inkluderar även 8 och 12.

**Vanlig missuppfattning:** Att or avgränsar ett intervall eller att gränsvärden inte spelar roll.

**Repetition:** Gör en spårtabell för if–elif–else och testa värden under, på och över båda intervallgränserna.

### p1-13-08 · Kapitel 6: for och ackumulator

**Typ:** Kodförståelse

Vilket tal skrivs ut?

```python
summa = 6
for tal in range(2, 8, 2):
    summa += tal
print(summa)
```

A. 18
B. 28
C. 10
D. 6

**Rätt svar:** 18

**Förklaring:** range(2, 8, 2) ger 2, 4 och 6. Summan börjar på 6 och blir 6 + 2 + 4 + 6 = 18.

**Vanlig missuppfattning:** Att stoppvärdet i range ingår eller att summans startvärde ignoreras.

**Repetition:** Spåra styrvariabel och summa för varje loopvarv. Skriv upp vilka värden range faktiskt ger och när while avslutas.

### p1-13-09 · Kapitel 6: while och avslut

**Typ:** Felsökning

Loopen fastnar på talet 4. Vilken rad ska läggas till indraget sist i loopen för att utskriften ska bli 4, 3, 2, 1?

```python
kvar = 4
while kvar > 0:
    print(kvar)
```

A. kvar -= 1
B. kvar = 4
C. kvar += 1
D. break

**Rätt svar:** kvar -= 1

**Förklaring:** kvar måste minska varje varv. När kvar blir 0 blir villkoret falskt. break skulle bara ge en utskrift.

**Vanlig missuppfattning:** Att ett while-villkor själv förändrar styrvariabeln.

**Repetition:** Spåra styrvariabel och summa för varje loopvarv. Skriv upp vilka värden range faktiskt ger och när while avslutas.

### p1-13-10 · Kapitel 7: listor, index och append

**Typ:** Kodförståelse

Vad skrivs ut?

```python
matningar = [3, 5]
matningar.append(11)
matningar[0] = 8
print(matningar[-1])
```

A. 11
B. 8
C. 5
D. IndexError

**Rätt svar:** 11

**Förklaring:** append lägger till 11 sist. Index 0 ändras till 8, men index -1 pekar på det sista värdet 11.

**Vanlig missuppfattning:** Att append ersätter ett värde eller att -1 är ett ogiltigt index.

**Repetition:** Skapa en lista, använd append, ändra index 0 och läs index -1. Förklara varje förändring före körning.

### p1-13-11 · Kapitel 8: parametrar och return

**Typ:** Kodförståelse

Vad skrivs ut?

```python
def kostnad(antal, styckpris):
    return antal * styckpris

total = kostnad(3, 7) + 4
print(total)
```

A. 25
B. 23
C. 15
D. Ingenting, eftersom funktionen bara returnerar.

**Rätt svar:** 25

**Förklaring:** Funktionen returnerar 3 * 7 = 21. Därefter adderas 4 och print skriver ut 25.

**Vanlig missuppfattning:** Att return och print är samma sak eller att returvärdet inte kan användas vidare.

**Repetition:** Skriv en funktion med parametrar och return. Använd returvärdet i en ny beräkning och jämför gränserna i randint med range.

### p1-13-12 · Kapitel 8: random och intervall

**Typ:** Begrepp

Vilka värden kan sparas i drag?

```python
import random
drag = random.randint(4, 7)
```

A. Heltalen 4, 5, 6 och 7.
B. Bara heltalen 4, 5 och 6.
C. Alla decimaltal mellan 4 och 7.
D. Alltid heltalet 7.

**Rätt svar:** Heltalen 4, 5, 6 och 7.

**Förklaring:** randint ger ett heltal och båda gränserna ingår. Till skillnad från range kan även den övre gränsen 7 väljas.

**Vanlig missuppfattning:** Att randint har samma stoppregel som range.

**Repetition:** Skriv en funktion med parametrar och return. Använd returvärdet i en ny beräkning och jämför gränserna i randint med range.

### p1-13-13 · Kapitel 9: logiska fel och felsökning

**Typ:** Felsökning

Programmet ska öka saldot med bonusen men skriver ut 30. Vilken ändring rättar felet?

```python
saldo = 30
bonus = 8
saldo + bonus
print(saldo)
```

A. Ersätt saldo + bonus med saldo = saldo + bonus.
B. Ersätt bonus = 8 med bonus = "8".
C. Sätt citattecken runt saldo i print.
D. Byt + mot ==.

**Rätt svar:** Ersätt saldo + bonus med saldo = saldo + bonus.

**Förklaring:** Uttrycket saldo + bonus beräknas men sparas inte. Tilldelning behövs för att uppdatera saldo; felet är logiskt.

**Vanlig missuppfattning:** Att en beräkning automatiskt uppdaterar sin variabel.

**Repetition:** Skriv ut variabelvärden före och efter en beräkning, kontrollera tilldelningen och ändra en sak i taget.

### p1-13-14 · Kapitel 10: try och except

**Typ:** Kodförståelse

Användaren skriver citron. Vilka texter skrivs ut, i ordning?

```python
try:
    antal = int(input("Antal: "))
    print(antal + 2)
except:
    print("Skriv heltal")
print("Klar")
```

A. Skriv heltal, sedan Klar.
B. 12, sedan Klar.
C. Bara Klar.
D. Programmet kraschar innan någon text skrivs ut.

**Rätt svar:** Skriv heltal, sedan Klar.

**Förklaring:** int kan inte omvandla citron. Körningen hoppar till except och fortsätter därefter efter hela try–except-blocket.

**Vanlig missuppfattning:** Att except avslutar hela programmet eller att resten av try körs efter felet.

**Repetition:** Testa en inmatningsloop med text och sedan heltal. Spåra övergången från try till except och var break körs.

### p1-13-15 · Kapitel 10: robust inmatning och loop

**Typ:** Tillämpning

Användaren skriver först katt och sedan 4. Vad gör programmet?

```python
while True:
    try:
        tal = int(input("Tal: "))
        print(tal * 2)
        break
    except:
        print("Försök igen")
```

A. Visar Försök igen, frågar på nytt, skriver 8 och avslutar loopen.
B. Visar Försök igen och avslutar direkt.
C. Skriver 8 och fortsätter fråga utan slut.
D. Försöker omvandla katt igen utan att fråga.

**Rätt svar:** Visar Försök igen, frågar på nytt, skriver 8 och avslutar loopen.

**Förklaring:** Efter felet fortsätter while-loopen med en ny inmatning. Vid 4 lyckas omvandlingen, 8 skrivs ut och break avslutar loopen.

**Vanlig missuppfattning:** Att try automatiskt upprepar inmatning eller att break körs även när ett tidigare steg misslyckas.

**Repetition:** Testa en inmatningsloop med text och sedan heltal. Spåra övergången från try till except och var break körs.

### p1-13-16 · Kapitel 11: struktur och läsbarhet

**Typ:** Tillämpning

Samma fraktberäkning finns kopierad på fyra ställen. Vilken ändring gör programmet lättare att underhålla?

A. Samla beräkningen i en funktion med tydligt namn och anropa den där den behövs.
B. Byt alla variabelnamn till en enda bokstav.
C. Skriv en kommentar som lovar att kopiorna alltid stämmer, men behåll dem.
D. Ta bort indrag och tomma rader så att filen blir kortare.

**Rätt svar:** Samla beräkningen i en funktion med tydligt namn och anropa den där den behövs.

**Förklaring:** En funktion med tydligt ansvar minskar upprepning. En ändring kan göras på ett ställe och funktionen blir lättare att testa.

**Vanlig missuppfattning:** Att kortare kod eller fler kommentarer alltid gör strukturen bättre.

**Repetition:** Samla en upprepad beräkning i en funktion med tydligt namn och testa funktionen med två olika indata.

### p1-13-17 · Kapitel 12: Tkinter och händelser

**Typ:** Felsökning

Knappen ska anropa visa först när den klickas. Vilken rad kopplar funktionen rätt? Anta att window och visa redan är definierade.

```python
import tkinter as tk
# window är ett Tk-fönster.
# visa är en funktion utan parametrar.
```

A. knapp = tk.Button(window, text="Visa", command=visa)
B. knapp = tk.Button(window, text="Visa", command=visa())
C. knapp = tk.Button(window, text="Visa", command="visa")
D. knapp = tk.Button(window, text="Visa", command=print("visa"))

**Rätt svar:** knapp = tk.Button(window, text="Visa", command=visa)

**Förklaring:** command ska få själva funktionen. visa() anropar funktionen direkt när knappen skapas, i stället för vid klick.

**Vanlig missuppfattning:** Att command=visa och command=visa() betyder samma sak.

**Repetition:** Bygg en liten Tkinter-app med Entry, Button och Label. Förklara command, get, int och config och testa flera klick.

### p1-13-18 · Kapitel 12: Tkinter input och output

**Typ:** Kodförståelse

Entry-fältet innehåller texten 6. Vad visar resultatetiketten efter ett klick, om funktionen är kopplad till knappen?

```python
def berakna():
    antal = int(entry.get())
    resultat.config(text=str(antal * 3))
```

A. 18
B. 666
C. 6
D. Etiketten ändras inte, eftersom config bara skriver i terminalen.

**Rätt svar:** 18

**Förklaring:** get hämtar text, int omvandlar till tal och config ändrar etikettens text till 18.

**Vanlig missuppfattning:** Att get ger ett tal eller att config bara skriver till terminalen.

**Repetition:** Bygg en liten Tkinter-app med Entry, Button och Label. Förklara command, get, int och config och testa flera klick.

### p1-13-19 · Kapitel 13: användare och tillgänglighet

**Typ:** Tillämpning

En app frågar efter sträckan till skolan. Vilken lösning hjälper användaren bäst?

A. Etiketten "Sträcka i km", läsbar kontrast och ett felmeddelande som ber om ett tal större än eller lika med 0.
B. Etiketten "Värde", svag kontrast och meddelandet "Fel" vid alla problem.
C. Ingen etikett och bara en röd bakgrund som felmeddelande.
D. Acceptera alla texter utan kontroll och visa ett godtyckligt resultat.

**Rätt svar:** Etiketten "Sträcka i km", läsbar kontrast och ett felmeddelande som ber om ett tal större än eller lika med 0.

**Förklaring:** Enhet, tydliga instruktioner, läsbarhet och hjälpsam validering gör gränssnittet mer begripligt och tillgängligt.

**Vanlig missuppfattning:** Att ett tekniskt fungerande program automatiskt är lätt att använda.

**Repetition:** Granska ett gränssnitts instruktioner och felmeddelanden. Beskriv sedan två antaganden i en simulering och hur de kan kontrolleras.

### p1-13-20 · Kapitel 13: simulering och modeller

**Typ:** Begrepp

En simulering visar att en ny busstidtabell minskar väntetiden. Vilken slutsats är rimlig?

A. Resultatet behöver granskas mot modellens antaganden och verkliga data innan tidtabellen ändras.
B. Simuleringen bevisar att väntetiden alltid minskar för alla resenärer.
C. Om programmet saknar syntaxfel måste modellen beskriva verkligheten exakt.
D. En simulering kan aldrig användas som beslutsstöd.

**Rätt svar:** Resultatet behöver granskas mot modellens antaganden och verkliga data innan tidtabellen ändras.

**Förklaring:** En simulering bygger på regler, antaganden och förenklingar. Den kan ge användbart beslutsunderlag, men resultatet behöver granskas och jämföras med verkligheten.

**Vanlig missuppfattning:** Att kod som körs utan fel också garanterar en korrekt modell av verkligheten.

**Repetition:** Granska ett gränssnitts instruktioner och felmeddelanden. Beskriv sedan två antaganden i en simulering och hur de kan kontrolleras.

## Användning av resultat

Prioritera högst tre kapitel utifrån antal fel. Låt eleven förutsäga ett nytt programs resultat, förklara sin tanke och sedan kontrollköra. Enstaka frågor täcker inte ett helt kapitel; kontrollera också osäkerhet i kapitel där eleven svarat rätt. Dra inga automatiska betygsslutsatser från poäng eller procent.

## Tekniska identiteter

- HTML: `p1-kapitel-1-13-testprov-v8m3q6.html`
- Test-ID: `kapitel-1-13-v8m3q6`
- localStorage: `p1-testprov-kap1-13-v8m3q6-latest`
- Resultatflik: `Testprov 1-13 v8m3q6`
- Fyra kolumner: Tid | Förnamn | Antal rätt | Rekommenderad repetition
- Endast sammanfattning skickas till Google. Enskilda svar finns i elevens lokala återkoppling.
- Olistat och noindex, utan länk i kursnavigationen; ingen lösenordsspärr.
