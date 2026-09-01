def greet(name):
    print(f"Hej {name}")


def double(number):
    return number * 2


name = input("Vad heter du? ")
number = float(input("Skriv ett tal: "))
greet(name)
print(f"Dubbla talet är {double(number)}")
