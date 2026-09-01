age = int(input("Hur gammal är du? "))
student_card = input("Har du studentkort? (ja/nej) ").lower()
if age < 20 or student_card == "ja":
    print("Rabatt beviljad")
else:
    print("Ingen rabatt")
