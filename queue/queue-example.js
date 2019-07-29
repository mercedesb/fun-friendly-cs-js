import Queue from "./Queue.js";
import { render } from "../shared.js";

const BaconLine = new Queue();

document
  .querySelector(".QueueButton--enqueue")
  .addEventListener("click", function(e) {
    e.preventDefault();
    BaconLine.enqueue(`Person ${new Date().toString()}`);
    console.log(`Enqueued into the bacon line`);
    renderQueue();
  });

document
  .querySelector(".QueueButton--dequeue")
  .addEventListener("click", function(e) {
    e.preventDefault();
    BaconLine.dequeue();
    console.log(`Another happy customer!`);
    renderQueue();
  });

function renderQueue() {
  let template = "<ul>";
  for (let pez of BaconLine) {
    template += `<li>${pez.data}</li>`;
  }
  template += "</ul>";
  render(template, document.querySelector(".Queue"));
}
