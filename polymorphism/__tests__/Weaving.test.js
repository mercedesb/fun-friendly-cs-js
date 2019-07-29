import Weaving from "../Weaving.js";

describe("Weaving", () => {
  it("has a valid constructor", () => {
    expect(new Weaving(20)).toBeInstanceOf(Weaving);
  });

  describe("createFabric", () => {
    let craft;
    beforeEach(() => {
      craft = new Weaving(5);
    });

    it("is defined", () => {
      expect(craft.createFabric).toBeDefined();
    });

    it("takes one number argument", () => {
      expect(() => {
        craft.createFabric();
      }).toThrow();

      expect(() => {
        craft.createFabric("three");
      }).toThrow();

      expect(() => {
        craft.createFabric(30);
      }).not.toThrow();
    });

    it("returns a string", () => {
      expect(craft.createFabric(5)).toBeInstanceOf(Array);
    });
  });
});
