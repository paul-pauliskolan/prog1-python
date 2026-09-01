total = 0
while True:
    number = float(input("Skriv ett tal (0 avslutar): "))
    if number == 0:
        break
    total += number
print(f"Summan är {total}")
