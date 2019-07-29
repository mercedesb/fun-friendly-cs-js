export default class Weaving {
  constructor(rowLength) {
    this.rowLength = rowLength;
    this.tool = "Loom and shuttle";
  }

  createFabric(numberOfRows) {
    if (!numberOfRows || typeof numberOfRows !== "number") {
      throw new Error("Must specify a number of rows to create your fabric.");
    }

    let fabric = [];

    for (let row = 0; row < numberOfRows; row++) {
      fabric.push(this.weaveRow(row));
    }

    return fabric;
  }

  weaveRow(rowNumber) {
    let row = "";

    // start with Over when rowNumber is even, then every even stitch
    // start with Under when rowNumber is odd, then every even stitch
    for (let stitchNum = 0; stitchNum < this.rowLength; stitchNum++) {
      const isEvenRow = rowNumber % 2 === 0;
      const isOddRow = !isEvenRow;
      const isEvenStitch = stitchNum % 2 === 0;
      const isOddStitch = !isEvenStitch;

      if ((isEvenRow && isEvenStitch) || (isOddRow && isOddStitch)) {
        row += this.weaveWeftOverWarp();
      } else if ((isEvenRow && isOddStitch) || (isOddRow && isEvenStitch)) {
        row += this.weaveWeftUnderWarp();
      }
    }

    row += "Turn.\n";
    return row;
  }

  weaveWeftUnderWarp() {
    return "Weft thread under the warp; ";
  }

  weaveWeftOverWarp() {
    return "Weft thread over the warp; ";
  }
}
