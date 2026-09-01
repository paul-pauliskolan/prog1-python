try:
    number = int(input("Skriv ett heltal: "))
    print(number * 3)
except ValueError:
    print("Fel inmatning")
