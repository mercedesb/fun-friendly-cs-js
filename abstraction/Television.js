let power = Symbol("power");
let volume = Symbol("volume");

export default class Television {
  constructor() {
    this[power] = false;
    this[volume] = 0;
  }

  get power() {
    return this[power];
  }

  set power(powerState) {
    this[power] = powerState;
  }

  get volume() {
    return this[volume];
  }

  set volume(volumeState) {
    this[volume] = volumeState;
  }

  handleRemoteControlClick(infraredLight) {
    const binaryData = convertInfraredLightToBinary(infraredLight);
    const decodedData = decodeBinaryData(binaryData);
    return changeTelevisionState(decodedData, this);
  }
}

function convertInfraredLightToBinary(infraredLight) {
  console.log("Converting infrared light to binary");
  return infraredLight.lightData;
}

function decodeBinaryData(binaryData) {
  console.log("Decoding binary data");
  return binaryData;
}

function changeTelevisionState(data, television) {
  console.log("Assume the TV microprocessor here is taking care of its magic");
  if (data.button === "power") {
    television.power = !television.power;
  } else if (data.button === "volumeUp") {
    television.volume += 1;
  } else if (data.button === "volumeDown" && television.volume > 0) {
    television.volume -= 1;
  }
  return displayStateChangeToUser(television);
}

function displayStateChangeToUser(television) {
  if (!television.power) {
    return "The TV is off.";
  } else {
    return `The TV is on and the volume is set to ${television.volume}.`;
  }
}
