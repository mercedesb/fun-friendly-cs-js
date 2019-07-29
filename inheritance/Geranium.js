import Plant from "./Plant.js";

export default class Geranium extends Plant {
  constructor() {
    super();
    this.name = "Geranium";
    this.sun = true;
    this.wet = false;
    this.lightNeeds = "4 - 6 hours of direct sunlight per day.";
    this.soilNeeds =
      "Plant in a pot with soil-less potting mixture and good drainage.";
    this.waterNeeds =
      "Water thoroughly and allow to soil to completely dry between waterings.";
  }
}
