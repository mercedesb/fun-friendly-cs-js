cute_instagram_dogs = set(
    ["daily_doggy", "puppy_power", "cats_and_dogs_bff", "furry_friends"]
)

cute_instagram_cats = set(
    ["catzzzz", "monsieur_meow", "cats_and_dogs_bff", "furry_friends"]
)

dog_cat_intersection = cute_instagram_dogs.intersection(cute_instagram_cats)
print(f"Cute accounts that have both cats and dogs: {dog_cat_intersection}\n")

dog_cat_union = cute_instagram_dogs.union(cute_instagram_cats)
print(f"All cute accounts: {dog_cat_union}\n")

cat_complement = cute_instagram_cats.difference(cute_instagram_dogs)
print(f"Cute accounts that have only cats (no dogs allowed): {cat_complement}\n")

dog_complement = cute_instagram_dogs.difference(cute_instagram_cats)
print(f"Cute accounts that have only dogs (no cats allowed): {dog_complement}\n")

cat_dog_symetric_difference = cute_instagram_cats.symmetric_difference(cute_instagram_dogs)
print(f"Cute accounts that have only one type of animal (no cross-species friendships here): {cat_dog_symetric_difference}\n")

