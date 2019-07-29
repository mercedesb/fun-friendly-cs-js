import Knitting from "../Knitting.js";

describe("Knitting", () => {
  it("has a valid constructor", () => {
    expect(new Knitting(20)).toBeInstanceOf(Knitting);
  });

  describe("createFabric", () => {
    let craft;
    beforeEach(() => {
      craft = new Knitting(5);
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
