number = int(input("Vilken multiplikationstabell vill du se? "))
for factor in range(1, 11):
    print(f"{number} x {factor} = {number * factor}")
