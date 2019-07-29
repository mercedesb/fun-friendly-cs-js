import Geranium from "../Geranium.js";
import Plant from "../Plant.js";

describe("Geranium", () => {
  it("has a valid constructor", () => {
    expect(new Geranium()).toBeInstanceOf(Geranium);
  });

  it("is a child of Plant", () => {
    expect(new Geranium()).toBeInstanceOf(Plant);
  });

  describe("Methods from Plant (super class)", () => {
    let plant;
    beforeEach(() => {
      plant = new Geranium();
    });

    describe("name", () => {
      it("is defined", () => {
        expect(plant.name).toBeDefined();
      });
    });

    describe("sun", () => {
      it("is defined", () => {
        expect(plant.sun).toBeDefined();
      });
    });

    describe("shade", () => {
      it("is defined", () => {
        expect(plant.shade).toBeDefined();
      });
    });

    describe("wet", () => {
      it("is defined", () => {
        expect(plant.wet).toBeDefined();
      });
    });

    describe("dry", () => {
      it("is defined", () => {
        expect(plant.dry).toBeDefined();
      });
    });

    describe("lightNeeds", () => {
      it("is defined", () => {
        expect(plant.lightNeeds).toBeDefined();
      });
    });

    describe("waterNeeds", () => {
      it("is defined", () => {
        expect(plant.waterNeeds).toBeDefined();
      });
    });

    describe("soilNeeds", () => {
      it("is defined", () => {
        expect(plant.soilNeeds).toBeDefined();
      });
    });

    describe("plantingInstructions", () => {
      it("is defined", () => {
        expect(plant.plantingInstructions).toBeDefined();
      });
    });

    describe("careInstructions", () => {
      it("is defined", () => {
        expect(plant.careInstructions).toBeDefined();
      });
    });

    describe("learnHowToGarden", () => {
      it("is defined", () => {
        expect(plant.learnHowToGarden).toBeDefined();
      });
    });
  });
});
