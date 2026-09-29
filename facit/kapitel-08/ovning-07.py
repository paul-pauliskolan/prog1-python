import random


def roll_die(sides):
    return random.randint(1, sides)


result = roll_die(6)
print(f"Tärningen visar {result}")
