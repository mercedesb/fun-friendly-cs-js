import Horse from "./Horse.js";
import { render } from "../shared.js";

const GiddyUp = new Horse();

document
  .querySelector(".EncapsulationButton--walk")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const steps = parseInt(document.querySelector("#Steps").value, 10);
    const movementStats = GiddyUp.walk(steps);
    console.log("The horse is walking");
    renderHorse(movementStats);
  });

document
  .querySelector(".EncapsulationButton--trot")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const steps = parseInt(document.querySelector("#Steps").value, 10);
    const movementStats = GiddyUp.trot(steps);
    console.log("The horse is trotting");
    renderHorse(movementStats);
  });

document
  .querySelector(".EncapsulationButton--canter")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const steps = parseInt(document.querySelector("#Steps").value, 10);
    const movementStats = GiddyUp.canter(steps);
    console.log("The horse is cantering");
    renderHorse(movementStats);
  });

document
  .querySelector(".EncapsulationButton--gallop")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const steps = parseInt(document.querySelector("#Steps").value, 10);
    const movementStats = GiddyUp.gallop(steps);
    console.log("The horse is galloping");
    renderHorse(movementStats);
  });

function renderHorse(movement) {
  const { steps, time, distanceTraveled } = movement;
  let template = `Your horse moved ${steps} steps in ${time} seconds and traveled ${distanceTraveled} feet`;

  render(template, document.querySelector(".Encapsulation"));
}
