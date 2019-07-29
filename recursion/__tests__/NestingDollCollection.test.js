import NestingDollCollection from "../NestingDollCollection.js";

describe("NestingDollCollection", () => {
  it("has a valid constructor", () => {
    expect(new NestingDollCollection(7)).toBeInstanceOf(NestingDollCollection);
  });

  describe("count", () => {
    it("accurately counts the number of nested dolls", () => {
      expect(new NestingDollCollection(7).count()).toEqual(7);
      expect(new NestingDollCollection(3).count()).toEqual(3);
      expect(new NestingDollCollection(10).count()).toEqual(10);
    });
  });
});
