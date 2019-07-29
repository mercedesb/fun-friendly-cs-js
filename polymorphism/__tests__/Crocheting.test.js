import Crocheting from "../Crocheting.js";

describe("Crocheting", () => {
  it("has a valid constructor", () => {
    expect(new Crocheting(20)).toBeInstanceOf(Crocheting);
  });

  describe("createFabric", () => {
    let craft;
    beforeEach(() => {
      craft = new Crocheting(5);
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
