points = int(input("Ange poäng (0–100): "))
if points < 50:
    print("Underkänt")
elif points <= 79:
    print("Godkänt")
else:
    print("Mycket bra")
