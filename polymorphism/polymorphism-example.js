import Knitting from "./Knitting.js";
import Crocheting from "./Crocheting.js";
import Weaving from "./Weaving.js";
import { render } from "../shared.js";

let YarnCraft;

document
  .querySelector(".PolymorphismForm")
  .addEventListener("submit", function(e) {
    e.preventDefault();
    const selectedCraftType = document.querySelector(
      "input[name='YarnCraft']:checked"
    );

    if (!selectedCraftType) {
      alert("Oops! Pick a craft");
      return;
    }

    const craft = selectedCraftType.value;
    const rowLength = parseInt(document.querySelector("#RowLength").value, 10);
    const numberOfRows = parseInt(document.querySelector("#NumRows").value, 10);

    if (craft === "knit") {
      YarnCraft = Knitting;
    } else if (craft === "crochet") {
      YarnCraft = Crocheting;
    } else if (craft === "weave") {
      YarnCraft = Weaving;
    }
    const chosenCraft = new YarnCraft(rowLength);
    const fabric = chosenCraft.createFabric(numberOfRows);
    renderFabric(fabric);
  });

function renderFabric(fabric) {
  const template = fabric.join("<br/>");
  render(template, document.querySelector(".Polymorphism"));
}
