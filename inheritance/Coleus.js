import Plant from "./Plant.js";

export default class Coleus extends Plant {
  constructor() {
    super();
    this.name = "Coleus";
    this.sun = true;
    this.wet = true;
    this.lightNeeds = "Partial sun.";
    this.soilNeeds =
      "Plant in fertile, well draining soil in a pot or the ground.";
    this.waterNeeds = "Keep soil moist as much as possible.";
  }
}
