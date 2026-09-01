while True:
    try:
        number = float(input("Skriv ett tal större än 0: "))
        if number <= 0:
            print("Talet måste vara större än 0")
            continue
        break
    except ValueError:
        print("Du måste skriva ett giltigt tal")
print(number * 5)
