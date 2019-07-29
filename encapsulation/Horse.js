const LegPosition = {
  UP: Symbol("up"),
  DOWN: Symbol("down")
};
Object.freeze(LegPosition);

export { LegPosition };

let frontLeftLegPosition = Symbol("frontLeftLegPosition");
let frontRightLegPosition = Symbol("frontRightLegPosition");
let backLeftLegPosition = Symbol("backLeftLegPosition");
let backRightLegPosition = Symbol("backRightLegPosition");

export default class Horse {
  constructor() {
    this.stand();
  }

  get frontLeftLegPosition() {
    return this[frontLeftLegPosition];
  }

  get frontRightLegPosition() {
    return this[frontRightLegPosition];
  }

  get backLeftLegPosition() {
    return this[backLeftLegPosition];
  }

  get backRightLegPosition() {
    return this[backRightLegPosition];
  }

  stand() {
    this[frontLeftLegPosition] = LegPosition.DOWN;
    this[frontRightLegPosition] = LegPosition.DOWN;
    this[backLeftLegPosition] = LegPosition.DOWN;
    this[backRightLegPosition] = LegPosition.DOWN;
  }

  // 1 step = 6 ft

  // 4 mph
  walk(steps) {
    let time = 0;
    let distanceTraveled = 0;

    for (let i = 0; i < steps; i++) {
      this[backLeftLegPosition] = LegPosition.UP;
      this[backLeftLegPosition] = LegPosition.DOWN;

      this[frontLeftLegPosition] = LegPosition.UP;
      this[frontLeftLegPosition] = LegPosition.DOWN;

      this[backRightLegPosition] = LegPosition.UP;
      this[backRightLegPosition] = LegPosition.DOWN;

      this[frontRightLegPosition] = LegPosition.UP;
      this[frontRightLegPosition] = LegPosition.DOWN;

      time += 1; // 1 step / second
      distanceTraveled += 6; // 6 ft / sec
    }

    return { steps, time, distanceTraveled };
  }

  // 10 mph
  trot(steps) {
    let time = 0;
    let distanceTraveled = 0;

    for (let i = 0; i < steps; i++) {
      this[backLeftLegPosition] = LegPosition.UP;
      this[frontRightLegPosition] = LegPosition.UP;
      this[backLeftLegPosition] = LegPosition.DOWN;
      this[frontRightLegPosition] = LegPosition.DOWN;

      this[backRightLegPosition] = LegPosition.UP;
      this[frontLeftLegPosition] = LegPosition.UP;
      this[backRightLegPosition] = LegPosition.DOWN;
      this[frontLeftLegPosition] = LegPosition.DOWN;

      time += 0.4; // 2.5 steps / second
      distanceTraveled += 5.87; // 14.667 ft / sec
    }

    return { steps, time, distanceTraveled };
  }

  // 15 mph
  canter(steps) {
    let time = 0;
    let distanceTraveled = 0;

    for (let i = 0; i < steps; i++) {
      this[backLeftLegPosition] = LegPosition.UP;
      this[backLeftLegPosition] = LegPosition.DOWN;

      this[backRightLegPosition] = LegPosition.UP;
      this[frontLeftLegPosition] = LegPosition.UP;
      this[backRightLegPosition] = LegPosition.DOWN;
      this[frontLeftLegPosition] = LegPosition.DOWN;

      this[frontRightLegPosition] = LegPosition.UP;
      this[frontRightLegPosition] = LegPosition.DOWN;

      time += 0.27; // 3.667 steps / second
      distanceTraveled += 6; // 22 ft / second
    }

    return { steps, time, distanceTraveled };
  }

  // 25 mph
  gallop(steps) {
    let time = 0;
    let distanceTraveled = 0;

    for (let i = 0; i < steps; i++) {
      this[backLeftLegPosition] = LegPosition.UP;
      this[backLeftLegPosition] = LegPosition.DOWN;

      this[backRightLegPosition] = LegPosition.UP;
      this[backRightLegPosition] = LegPosition.DOWN;

      this[frontLeftLegPosition] = LegPosition.UP;
      this[frontLeftLegPosition] = LegPosition.DOWN;

      this[frontRightLegPosition] = LegPosition.UP;
      this[frontRightLegPosition] = LegPosition.DOWN;

      time += 0.167; // 6 steps / second
      distanceTraveled += 6.11; // 36.667 ft / second
    }

    return { steps, time, distanceTraveled };
  }
}
