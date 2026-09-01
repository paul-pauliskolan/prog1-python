try:
    number = float(input("Skriv ett tal: "))
    print(100 / number)
except ValueError:
    print("Fel inmatning")
except ZeroDivisionError:
    print("Det går inte att dividera med noll")
