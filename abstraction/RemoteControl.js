import Television from "./Television.js";

let PowerButton = Symbol("power");
let VolumeUp = Symbol("volumeUp");
let VolumeDown = Symbol("volumeDown");

export default class RemoteControl {
  constructor() {
    this.television = new Television();
  }

  power() {
    return handleButtonClick(PowerButton, this.television);
  }

  turnUpVolume() {
    return handleButtonClick(VolumeUp, this.television);
  }

  turnDownVolume() {
    return handleButtonClick(VolumeDown, this.television);
  }
}

function handleButtonClick(button, television) {
  const encodedData = encodeButtonPressIntoBinary(button);
  return sendBinaryDataAsInfraredLight(encodedData, television);
}

function encodeButtonPressIntoBinary(button) {
  console.log("Assume the button data is encoded into binary");
  return { button: button };
}

function sendBinaryDataAsInfraredLight(binaryData, television) {
  const infraredLight = convertBinaryToInfraredLight(binaryData);
  console.log("Sending infrared light signal");
  return television.handleRemoteControlClick(infraredLight);
}

function convertBinaryToInfraredLight(binaryData) {
  console.log("Converting binary data into infrared light");
  return { lightData: binaryData };
}
