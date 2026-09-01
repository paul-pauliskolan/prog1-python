def age_in_ten_years(age):
    """Returnera personens ålder om tio år."""
    return age + 10


# Läs in uppgifter om användaren.
name = input("Vad heter du? ")
age = int(input("Hur gammal är du? "))

# Beräkna och presentera resultatet.
future_age = age_in_ten_years(age)
print(f"Hej {name}!")
print(f"Om tio år är du {future_age} år gammal")
