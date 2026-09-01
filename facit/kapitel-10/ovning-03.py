try:
    first = int(input("Skriv det första heltalet: "))
    second = int(input("Skriv det andra heltalet: "))
    print(first + second)
except ValueError:
    print("Fel inmatning")
