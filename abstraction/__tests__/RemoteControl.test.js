import RemoteControl from "../RemoteControl.js";

describe("RemoteControl", () => {
  it("has a valid constructor", () => {
    expect(new RemoteControl()).toBeInstanceOf(RemoteControl);
  });

  it("allows user to call power method", () => {
    const remote = new RemoteControl();
    expect(remote.power).toBeDefined();
    expect(typeof remote.power).toEqual("function");
  });

  it("allows user to call turn volume up method", () => {
    const remote = new RemoteControl();
    expect(remote.turnUpVolume).toBeDefined();
    expect(typeof remote.turnUpVolume).toEqual("function");
  });

  it("allows user to call turn volume down method", () => {
    const remote = new RemoteControl();
    expect(remote.turnDownVolume).toBeDefined();
    expect(typeof remote.turnDownVolume).toEqual("function");
  });

  it("does not give user access to any internal methods", () => {
    const remote = new RemoteControl();
    expect(remote.handleButtonClick).not.toBeDefined();
    expect(remote.encodeButtonPressIntoBinary).not.toBeDefined();
    expect(remote.sendBinaryDataAsInfraredLight).not.toBeDefined();
    expect(remote.convertBinaryToInfraredLight).not.toBeDefined();
  });
});
