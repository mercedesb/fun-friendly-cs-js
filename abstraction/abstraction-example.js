import RemoteControl from "./RemoteControl.js";
import { render } from "../shared.js";

const Remote = new RemoteControl();

document
  .querySelector(".AbstractionButton--power")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const tvState = Remote.power();
    renderTV(tvState);
  });

document
  .querySelector(".AbstractionButton--volumeUp")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const tvState = Remote.turnUpVolume();
    renderTV(tvState);
  });

document
  .querySelector(".AbstractionButton--volumeDown")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const tvState = Remote.turnDownVolume();
    renderTV(tvState);
  });

function renderTV(tvState) {
  let template = `${tvState} (check out the console to see the abstracted behavior)`;
  render(template, document.querySelector(".Abstraction"));
}
