import Cupcakes from "./Cupcakes.js";
import { render } from "../shared.js";

const randomNumber = Math.floor(Math.random() * 6 + 1);
const BatchesOfCupcakes = new Cupcakes();
const RecipeStepsFollowed = [];

const buttons = document.querySelectorAll(".BigOButton");
[...buttons].forEach(button =>
  button.addEventListener("click", function(e) {
    e.preventDefault();
    e.target.disabled = "disabled";

    if (!e.target.classList.contains("BigOButton--last")) {
      e.target.nextElementSibling.disabled = "";
    }
  })
);

document.querySelector(".BigOButton--step1").addEventListener("click", function(e) {
  e.preventDefault();
  RecipeStepsFollowed.push(BatchesOfCupcakes.preheatOven(randomNumber));
  renderCupcakeProgress();
});

document.querySelector(".BigOButton--step2").addEventListener("click", function(e) {
  e.preventDefault();
  RecipeStepsFollowed.push(BatchesOfCupcakes.combineButterAndSugar(randomNumber));
  renderCupcakeProgress();
});

document.querySelector(".BigOButton--step3").addEventListener("click", function(e) {
  e.preventDefault();
  RecipeStepsFollowed.push(BatchesOfCupcakes.addEggs(randomNumber));
  renderCupcakeProgress();
});

document.querySelector(".BigOButton--step4").addEventListener("click", function(e) {
  e.preventDefault();
  RecipeStepsFollowed.push(BatchesOfCupcakes.combineFlourAndBakingPowder(randomNumber));
  renderCupcakeProgress();
});

document.querySelector(".BigOButton--step5").addEventListener("click", function(e) {
  e.preventDefault();
  RecipeStepsFollowed.push(
    BatchesOfCupcakes.combineFlourMixtureAndMilkAndButterMixture(randomNumber)
  );
  renderCupcakeProgress();
});

document.querySelector(".BigOButton--step6").addEventListener("click", function(e) {
  e.preventDefault();
  RecipeStepsFollowed.push(BatchesOfCupcakes.bake());
  renderCupcakeProgress();
});

document.querySelector(".BigOButton--step7").addEventListener("click", function(e) {
  e.preventDefault();
  RecipeStepsFollowed.push(BatchesOfCupcakes.fibonacciFrosting(randomNumber));
  RecipeStepsFollowed.push("Your cupcakes are done and they're ok!");
  renderCupcakeProgress();
});

function renderCupcakeProgress() {
  let template = "<ul>";
  for (let step of RecipeStepsFollowed) {
    template += `<li>${step}</li>`;
  }
  template += "</ul>";
  render(template, document.querySelector(".BigONotation"));
}
