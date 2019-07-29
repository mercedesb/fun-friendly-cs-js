export default class Crocheting {
  constructor(rowLength) {
    this.rowLength = rowLength;
    this.tool = "1 hook";
  }

  createFabric(numberOfRows) {
    if (!numberOfRows || typeof numberOfRows !== "number") {
      throw new Error("Must specify a number of rows to create your fabric.");
    }

    let fabric = [];

    for (let row = 0; row < numberOfRows; row++) {
      fabric.push(this.stitchRow());
    }

    return fabric;
  }

  stitchRow() {
    let row = "";
    for (let stitchNum = 0; stitchNum < this.rowLength; stitchNum++) {
      row += this.singleCrochet();
    }
    row += "Turn.\n";
    return row;
  }

  singleCrochet() {
    return "Created a single crochet stitch; ";
  }
}
