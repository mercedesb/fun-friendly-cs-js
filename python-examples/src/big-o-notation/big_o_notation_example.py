import math
import random


receipe_ratios = {
    "butter": {"name": "butter", "number": 1, "measurement": "C."},
    "sugar": {"name": "sugar", "number": 2, "measurement": "C."},
    "eggs": {"name": "eggs", "number": 4, "measurement": ""},
    "flour": {"name": "flour", "number": 3, "measurement": "C."},
    "baking_powder": {"name": "baking powder", "number": 1, "measurement": "tbsp"},
    "milk": {"name": "mlk", "number": 1, "measurement": "C."},
}


# O(1)
def preheat_oven(num_batches):
    return (
        f"Preheating oven to 350 degrees to make {num_batches} "
        f"batches ofcupcakes: O(1)"
    )


# O(1)
def combine_butter_and_sugar(num_batches):
    steps = []
    butter = {
        "ingredient": receipe_ratios["butter"],
        "amount": num_batches * receipe_ratios["butter"]["number"],
    }
    sugar = {
        "ingredient": receipe_ratios["sugar"],
        "amount": num_batches * receipe_ratios["sugar"]["number"],
    }

    steps.append(beat_with_electric_mixer([butter, sugar], 3))
    steps.append("Combine butter and sugar: O(1)")
    steps.append("")
    return steps


# O(n)
def add_eggs(num_batches):
    steps = []
    amount = num_batches * receipe_ratios["eggs"]["number"]
    one_egg = {"ingredient": receipe_ratios["eggs"], "amount": 1}
    butter_mixture = {"ingredient": {"name": "butter mixture"}}

    for _ in range(amount):
        steps.append(beat_with_electric_mixer([one_egg, butter_mixture], 1))

    steps.append("Added eggs: O(n)")
    steps.append("")
    return steps


# O(1)
def combine_flour_and_baking_powder(num_batches):
    steps = []

    flour = {
        "ingredient": receipe_ratios["flour"],
        "amount": num_batches * receipe_ratios["flour"]["number"],
    }
    baking_powder = {
        "ingredient": receipe_ratios["baking_powder"],
        "amount": num_batches * receipe_ratios["baking_powder"]["number"],
    }

    steps.append(stir_with_spoon([flour, baking_powder]))
    steps.append("")
    return steps


# O(n^2)
def combine_flour_mixture_and_milk_and_butter_mixture(num_batches):
    steps = []
    butter_mixture = {"ingredient": {"name": "butter mixture"}}
    flour_mixure = {"ingredient": {"name": "flour mixture"}}
    milk = {
        "ingredient": receipe_ratios["milk"],
        "amount": num_batches * receipe_ratios["milk"]["number"] / (num_batches ** 2),
    }

    # is this repeated twice?
    steps.append(beat_with_electric_mixer([butter_mixture, flour_mixure], 1))

    for batch in range(num_batches):
        for portion in range(num_batches):
            steps.append(beat_with_electric_mixer([butter_mixture, milk], 1))
            steps.append(beat_with_electric_mixer([butter_mixture, flour_mixure], 1))

    steps.append("Slowly combined milk, flour mixture, and butter mixture: O(n^2)")
    steps.append("")
    return steps


# O(1)
def bake():
    return "Poured into muffin tins. Baked for 28-30 minutes: O(1)"


#  See helper function calculate_fibonacci_number: O(2^n)
def fibonacci_frosting(num_batches):
    num_to_frost = calculate_fibonacci_number(num_batches)
    return (
        f"Iced the fibonacci number {num_to_frost} to all of the cupcakes: "
        "O(2^n) (check out the console for the process)"
    )


# Helper functions
def beat_with_electric_mixer(components, time_in_minutes):
    component_text = [get_ingredient_text(c) for c in components]
    component_str = ", ".join(component_text)
    return (
        f"Beating {component_str} with mixer at medium speed for "
        f"{time_in_minutes} minutes"
    )


def stir_with_spoon(components):
    component_text = [get_ingredient_text(c) for c in components]
    component_str = ", ".join(component_text)
    return f"Stirring {component_str} with spoon"


def get_ingredient_text(component):
    text = ""
    if component.get("amount"):
        text += f"{component['amount']} "
    if component.get("ingredient", {}).get("measurement"):
        text += f"{component['ingredient']['measurement']} "
    if component.get("ingredient", {}).get("name"):
        text += f"{component['ingredient']['name']}"
    return text


def calculate_fibonacci_number(num):
    if num <= 1:
        return num

    return calculate_fibonacci_number(num - 1) + calculate_fibonacci_number(num - 2)


def flatten_list_of_lists(l):
    flat_list = []
    for sublist in l:
        if isinstance(sublist, str):
            flat_list.append(sublist)
            continue
        for item in sublist:
            flat_list.append(item)
    return flat_list


if __name__ == "__main__":
    num_cupcakes = math.floor(random.random() * 6 + 1)

    recipe_steps_followed = []
    recipe_steps_followed.append(preheat_oven(num_cupcakes))
    recipe_steps_followed.append(combine_butter_and_sugar(num_cupcakes))
    recipe_steps_followed.append(add_eggs(num_cupcakes))
    recipe_steps_followed.append(combine_flour_and_baking_powder(num_cupcakes))
    recipe_steps_followed.append(
        combine_flour_mixture_and_milk_and_butter_mixture(num_cupcakes)
    )
    recipe_steps_followed.append(fibonacci_frosting(num_cupcakes))

    for step in flatten_list_of_lists(recipe_steps_followed):
        print(step)
