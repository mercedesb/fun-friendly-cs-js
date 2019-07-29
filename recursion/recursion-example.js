import NestingDollCollection from "./NestingDollCollection.js";
import { render } from "../shared.js";

const randomNumber = Math.floor(Math.random() * 11);
const NestingDolls = new NestingDollCollection(randomNumber);

document
  .querySelector(".RecursionButton--count")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const count = NestingDolls.count();
    renderCount(count);
  });

function renderCount(count) {
  let template = `There are ${count} nested dolls`;
  render(template, document.querySelector(".Recursion"));
}
