import LinkedList from "./LinkedList.js";
import { render } from "../shared.js";

const ScavengerHunt = new LinkedList();

document
  .querySelector(".LinkedListForm")
  .addEventListener("submit", function(e) {
    e.preventDefault();
    const valueInput = document.querySelector("#Add");
    const newValue = valueInput.value;
    ScavengerHunt.add(newValue);
    valueInput.value = "";
    console.log(`Added ${newValue}`);
    renderLinkedList();
  });

document
  .querySelector(".LinkedList-remove")
  .addEventListener("click", function(e) {
    e.preventDefault();
    ScavengerHunt.remove();
    renderLinkedList();
  });

function renderLinkedList() {
  let template = "<ul>";
  for (let clue of ScavengerHunt) {
    template += `<li>${clue.data}</li>`;
  }
  template += "</ul>";
  render(template, document.querySelector(".LinkedList"));
}
