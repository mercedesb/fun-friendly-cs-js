import Plant from "./Plant.js";

export default class Begonia extends Plant {
  constructor() {
    super();
    this.name = "Begonia";
    this.sun = false;
    this.wet = true;
    this.lightNeeds = "Partial shade with no direct sunlight.";
    this.soilNeeds =
      "Plant in a pot with a soil and organic matter (compost or peat moss) mixture and good drainage.";
    this.waterNeeds =
      "Keep soil lightly damp but don't overwater to avoid root rot.";
  }
}
