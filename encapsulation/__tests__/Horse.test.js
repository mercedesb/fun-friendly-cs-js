import Horse, { LegPosition } from "../Horse.js";

describe("Horse", () => {
  it("has a valid constructor", () => {
    expect(new Horse()).toBeInstanceOf(Horse);
  });

  it("does not allow you to mutate the leg positions directly", () => {
    const horse = new Horse();
    const initialFrontLegPosition = horse.frontLeftLegPosition;

    expect(() => {
      horse.frontLeftLegPosition = LegPosition.UP;
    }).toThrow();
    expect(horse.frontLeftLegPosition).toEqual(initialFrontLegPosition);
  });

  describe("movement methods", () => {
    let horse;
    beforeEach(() => {
      horse = new Horse();
    });

    describe("walk", () => {
      it("returns an object with the correct shape", () => {
        expect(horse.walk(900)).toEqual(
          expect.objectContaining({
            steps: expect.any(Number),
            time: expect.any(Number),
            distanceTraveled: expect.any(Number)
          })
        );
      });
    });

    describe("trot", () => {
      it("returns an object with the correct shape", () => {
        expect(horse.trot(900)).toEqual(
          expect.objectContaining({
            steps: expect.any(Number),
            time: expect.any(Number),
            distanceTraveled: expect.any(Number)
          })
        );
      });
    });

    describe("canter", () => {
      it("returns an object with the correct shape", () => {
        expect(horse.canter(900)).toEqual(
          expect.objectContaining({
            steps: expect.any(Number),
            time: expect.any(Number),
            distanceTraveled: expect.any(Number)
          })
        );
      });
    });

    describe("gallop", () => {
      it("returns an object with the correct shape", () => {
        expect(horse.gallop(900)).toEqual(
          expect.objectContaining({
            steps: expect.any(Number),
            time: expect.any(Number),
            distanceTraveled: expect.any(Number)
          })
        );
      });
    });
  });
});
