let Name = Symbol("name");
let Sun = Symbol("sun");
let Wet = Symbol("wet");
let LightNeeds = Symbol("light");
let WaterNeeds = Symbol("water");
let SoilNeeds = Symbol("soil");

export default class Plant {
  constructor() {
    this[Name] = null;
    this[LightNeeds] = null;
    this[WaterNeeds] = null;
    this[SoilNeeds] = null;
    this[Sun] = null;
    this[Wet] = null;
  }

  get name() {
    return this[Name];
  }

  set name(data) {
    this[Name] = data;
  }

  get sun() {
    return this[Sun];
  }

  set sun(data) {
    this[Sun] = data;
  }

  get shade() {
    return !this[Sun];
  }

  get wet() {
    return this[Wet];
  }

  set wet(data) {
    this[Wet] = data;
  }

  get dry() {
    return !this[Wet];
  }

  get lightNeeds() {
    return this[LightNeeds];
  }

  set lightNeeds(data) {
    this[LightNeeds] = data;
  }

  get waterNeeds() {
    return this[WaterNeeds];
  }

  set waterNeeds(data) {
    this[WaterNeeds] = data;
  }

  get soilNeeds() {
    return this[SoilNeeds];
  }

  set soilNeeds(data) {
    this[SoilNeeds] = data;
  }

  get plantingInstructions() {
    return `Planting instructions: ${this.soilNeeds}`;
  }

  get careInstructions() {
    return `Sunlight needs: ${this.lightNeeds}<br/>Watering instructions: ${
      this.waterNeeds
    }`;
  }

  learnHowToGarden() {
    return `${this.name}<br/>
    ${this.plantingInstructions}<br/>
    ${this.careInstructions}`;
  }
}
