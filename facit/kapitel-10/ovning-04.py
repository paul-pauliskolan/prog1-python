while True:
    try:
        first = int(input("Skriv det första heltalet: "))
        second = int(input("Skriv det andra heltalet: "))
        break
    except ValueError:
        print("Fel inmatning, försök igen")
print(first * second)
