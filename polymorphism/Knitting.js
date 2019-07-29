let Knit = Symbol("knit");
let Purl = Symbol("purl");

export default class Knitting {
  constructor(rowLength) {
    this.rowLength = rowLength;
    this.tool = "2 needles";
  }

  createFabric(numberOfRows) {
    if (!numberOfRows || typeof numberOfRows !== "number") {
      throw new Error("Must specify a number of rows to create your fabric.");
    }

    let fabric = [];

    for (let row = 0; row < numberOfRows; row++) {
      if (row % 2 === 0) {
        fabric.push(this.stitchRow(Knit));
      }
      if (row % 2 > 0) {
        fabric.push(this.stitchRow(Purl));
      }
    }

    return fabric;
  }

  stitchRow(stitch) {
    let row = "";

    for (let stitchNum = 0; stitchNum < this.rowLength; stitchNum++) {
      if (stitch === Knit) {
        row += this.knit();
      } else if (stitch === Purl) {
        row += this.purl();
      }
    }

    row += "Turn.\n";
    return row;
  }

  knit() {
    return "Created a knit stitch; ";
  }

  purl() {
    return "Created a purl stitch; ";
  }
}
