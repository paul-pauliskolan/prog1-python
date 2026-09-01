first = float(input("Skriv det första talet: "))
second = float(input("Skriv det andra talet: "))
if first > second:
    print(f"{first} är störst")
elif second > first:
    print(f"{second} är störst")
else:
    print("Talen är lika stora")
