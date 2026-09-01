def greet(name):
    print(f"Hej {name}")


def double(number):
    return number * 2


name = input("Vad heter du? ")
number = int(input("Skriv ett tal: "))
greet(name)
print(f"Ditt tal gånger två är {double(number)}")
