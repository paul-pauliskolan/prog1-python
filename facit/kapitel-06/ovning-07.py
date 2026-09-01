count = 0
while True:
    number = float(input("Skriv ett tal (0 avslutar): "))
    if number == 0:
        break
    count += 1
print(f"Du skrev {count} tal")
