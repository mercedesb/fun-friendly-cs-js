import Stack from "./Stack.js";
import { render } from "../shared.js";

const PEZDispenser = new Stack();

document
  .querySelector(".StackButton--push")
  .addEventListener("click", function(e) {
    e.preventDefault();
    PEZDispenser.push(`PEZ ${new Date().toString()}`);
    console.log(`Pushed onto the PEZ Dispenser`);
    renderStack();
  });

document
  .querySelector(".StackButton--pop")
  .addEventListener("click", function(e) {
    e.preventDefault();
    PEZDispenser.pop();
    console.log(`Ate a PEZ!`);
    renderStack();
  });

function renderStack() {
  let template = "<ul>";
  for (let pez of PEZDispenser) {
    template += `<li>${pez.data}</li>`;
  }
  template += "</ul>";
  render(template, document.querySelector(".Stack"));
}
