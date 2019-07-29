import Geranium from "./Geranium.js";
import Begonia from "./Begonia.js";
import Coleus from "./Coleus.js";
import { render } from "../shared.js";

const Plants = [new Geranium(), new Begonia(), new Coleus()];

document
  .querySelector(".InheritanceForm")
  .addEventListener("submit", function(e) {
    e.preventDefault();

    const selectedLightNeeds = document.querySelector(
      "input[name='lightNeeds']:checked"
    );

    const selectedWaterNeeds = document.querySelector(
      "input[name='waterNeeds']:checked"
    );

    if (!selectedLightNeeds || !selectedWaterNeeds) {
      alert("Oops! You have to tell me about your garden");
      return;
    }

    const lightNeeds = selectedLightNeeds.value;
    const waterNeeds = selectedWaterNeeds.value;

    const matchingPlants = Plants.filter(
      plant => plant[lightNeeds] && plant[waterNeeds]
    );
    renderPlants(matchingPlants);
  });

function renderPlants(plants) {
  let template;
  if (!plants || plants.length === 0) {
    template = "Uh oh, no matching plants";
  } else {
    template = "<ul>";
    for (let plant of plants) {
      template += `<li>${plant.learnHowToGarden()}</li>`;
    }
    template += "</ul>";
  }
  render(template, document.querySelector(".Inheritance"));
}
