import NestingDoll from "./NestingDoll.js";

export default class NestingDollCollection {
  constructor(number) {
    this.bigDoll = new NestingDoll(true);
    this.nestDolls(number - 1, this.bigDoll);
  }

  count() {
    return this.countNestedDolls(this.bigDoll);
  }

  countNestedDolls(doll) {
    const child = doll.open();

    // base case
    if (!child) {
      return 1;
    } else {
      return this.countNestedDolls(child) + 1;
    }
  }

  nestDolls(number, doll) {
    // base case
    if (number <= 1) {
      doll.addChild(false);
    } else {
      doll.addChild(true);
      this.nestDolls(number - 1, doll.child);
    }
  }
}
