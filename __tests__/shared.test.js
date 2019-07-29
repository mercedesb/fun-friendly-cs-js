import { render } from "../shared.js";

describe("render", () => {
  it("sets the nodes inner HTML", () => {
    document.body.innerHTML =
      "<main><h1>Hi!</h1><section><div class='node'></div></section></main>";
    const element = document.querySelector(".node");
    const template = "<span>Hello there!</span>";
    render(template, element);
    expect(element.innerHTML).toEqual(template);
  });
});
