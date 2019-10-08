import math
import random


class NestingDoll:
    def __init__(self, opens):
        self.opens = opens
        self.child = None

    def add_child(self, child_opens):
        self.child = NestingDoll(child_opens)

    def open(self):
        if self.opens:
            return self.child
        return None


class NestingDollCollection:
    def __init__(self, number):
        self.big_doll = NestingDoll(True)
        self.nest_dolls(number - 1, self.big_doll)

    def count(self):
        return self.count_nested_dolls(self.big_doll)

    def count_nested_dolls(self, doll):
        child = doll.open()

        # Base Case
        if not child:
            return 1

        return self.count_nested_dolls(child) + 1

    def nest_dolls(self, number, doll):
        # Base Case
        if number <= 1:
            doll.add_child(False)
        else:
            doll.add_child(True)
            self.nest_dolls(number - 1, doll.child)


if __name__ == "__main__":
    random_number = math.floor(random.random() * 11)
    nesting_dolls = NestingDollCollection(random_number)
    count = nesting_dolls.count()

    print(f"There are {count} nested dolls!")
