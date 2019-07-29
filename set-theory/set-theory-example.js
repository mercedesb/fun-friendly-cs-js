import { render } from "../shared.js";

const CuteInstagramDogs = new Set();
const CuteInstagramCats = new Set();

document
  .querySelector(".SetTheoryForm--add")
  .addEventListener("submit", function(e) {
    e.preventDefault();
    const valueInput = document.querySelector("#Account");
    const newValue = valueInput.value;
    const selectedAnimalTypes = document.querySelectorAll(
      "input[name='AnimalType']:checked"
    );
    if (selectedAnimalTypes.length === 0) {
      alert("Oops! Pick an animal type");
      return;
    }

    const selectedAnimalTypesValues = Array.from(selectedAnimalTypes).map(
      type => type.value
    );

    if (selectedAnimalTypesValues.includes("dog")) {
      CuteInstagramDogs.add(newValue);
    }
    if (selectedAnimalTypesValues.includes("cat")) {
      CuteInstagramCats.add(newValue);
    }

    valueInput.value = "";
    selectedAnimalTypes.forEach(node => (node.checked = false));
    console.log(`Added ${newValue}`);
    renderSets();
  });

document
  .querySelector(".SetTheoryButton--intersect")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const intersect = new Set(
      [...CuteInstagramDogs].filter(dogAccount =>
        CuteInstagramCats.has(dogAccount)
      )
    );
    renderSets("Cute accounts that have both cats and dogs!", intersect);
  });

document
  .querySelector(".SetTheoryButton--union")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const union = new Set([...CuteInstagramDogs, ...CuteInstagramCats]);
    renderSets("All the cute accounts!", union);
  });

document
  .querySelector(".SetTheoryButton--difference")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const difference = new Set(
      [...CuteInstagramDogs].filter(
        dogAccount => !CuteInstagramCats.has(dogAccount)
      )
    );
    renderSets(
      "Cute accounts that have only dogs (no cats allowed)!",
      difference
    );
  });

document
  .querySelector(".SetTheoryButton--complement")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const relativeComplement = new Set(
      [...CuteInstagramCats].filter(
        catAccount => !CuteInstagramDogs.has(catAccount)
      )
    );
    renderSets(
      "Cute accounts that have only cats (no dogs allowed)!",
      relativeComplement
    );
  });

document
  .querySelector(".SetTheoryButton--symmetricDifference")
  .addEventListener("click", function(e) {
    e.preventDefault();
    const difference = (SetA, SetB) =>
      new Set([...SetA].filter(element => !SetB.has(element)));

    const symmetricDifference = [CuteInstagramDogs, CuteInstagramCats].reduce(
      (accumulator, set) =>
        new Set([
          ...difference(accumulator, set),
          ...difference(set, accumulator)
        ])
    );

    renderSets(
      "Cute accounts that have only one type of animal (no cross-species friendships here)!",
      symmetricDifference
    );
  });

function renderSets(header, calculatedSet) {
  let template = "<div class='Set'><h3>Cute Instagram Dogs</h3><ul>";
  for (let dog of CuteInstagramDogs) {
    template += `<li>${dog}</li>`;
  }
  template += "</ul></div><div class='Set'><h3>Cute Instagram Cats</h3><ul>";
  for (let cat of CuteInstagramCats) {
    template += `<li>${cat}</li>`;
  }

  if (header && calculatedSet) {
    template += `</ul></div><div class='Set'><h3>${header}</h3><ul>`;
    for (let account of calculatedSet) {
      template += `<li>${account}</li>`;
    }
  }

  template += "</ul></div>";
  render(template, document.querySelector(".SetTheory"));
}
