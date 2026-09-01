while True:
    try:
        number = int(input("Skriv ett heltal: "))
        break
    except ValueError:
        print("Fel inmatning, försök igen")
print(number + 10)
