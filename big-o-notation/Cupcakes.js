export default class Cupcakes {
  constructor() {
    this.recipeRatios = {
      butter: { name: "butter", number: 1, measurement: "C." },
      sugar: { name: "sugar", number: 2, measurement: "C." },
      eggs: { name: "eggs", number: 4, measurement: "" },
      flour: { name: "flour", number: 3, measurement: "C." },
      bakingPowder: { name: "baking powder", number: 1, measurement: "tbsp" },
      milk: { name: "milk", number: 1, measurement: "C." }
    };
  }

  // O(1)
  preheatOven(numberOfBatches) {
    return `Preheating oven to 350 degrees to make ${numberOfBatches} batches ofcupcakes: O(1)`;
  }

  // O(1)
  combineButterAndSugar(numberOfBatches) {
    const steps = [];
    const butter = {
      ingredient: this.recipeRatios.butter,
      amount: numberOfBatches * this.recipeRatios.butter.number
    };
    const sugar = {
      ingredient: this.recipeRatios.sugar,
      amount: numberOfBatches * this.recipeRatios.sugar.number
    };

    steps.push(this.beatWithElectricMixer([butter, sugar], 3));
    steps.push("Combined butter and sugar: O(1)");
    return steps.join("<br/>");
  }

  // O(n)
  addEggs(numberOfBatches) {
    const steps = [];
    const amount = numberOfBatches * this.recipeRatios.eggs.number;
    const oneEgg = { ingredient: this.recipeRatios.eggs, amount: 1 };
    const butterMixture = { ingredient: "butter mixture" };

    for (let egg = 0; egg < amount; egg++) {
      steps.push(this.beatWithElectricMixer([oneEgg, butterMixture], 1));
    }

    steps.push("Added eggs: O(n)");
    return steps.join("<br/>");
  }

  // O(1)
  combineFlourAndBakingPowder(numberOfBatches) {
    const steps = [];
    const flour = {
      ingredient: this.recipeRatios.flour,
      amount: numberOfBatches * this.recipeRatios.flour.number
    };
    const bakingPowder = {
      ingredient: this.recipeRatios.bakingPowder,
      amount: numberOfBatches * this.recipeRatios.bakingPowder.number
    };

    steps.push(this.stirWithSpoon([flour, bakingPowder]));
    steps.push("Combined flour and baking powder: O(1)");
    return steps.join("<br/>");
  }

  // O(n^2)
  combineFlourMixtureAndMilkAndButterMixture(numberOfBatches) {
    const steps = [];
    const butterMixture = { ingredient: "butter mixture" };
    const flourMixture = { ingredient: "flour mixture" };
    const milk = {
      ingredient: this.recipeRatios.milk,
      amount:
        (numberOfBatches * this.recipeRatios.milk.number) / (numberOfBatches * numberOfBatches)
    };

    steps.push(this.beatWithElectricMixer([butterMixture, flourMixture], 1));

    for (let batch = 0; batch < numberOfBatches; batch++) {
      for (let portion = 0; portion < numberOfBatches; portion++) {
        steps.push(this.beatWithElectricMixer([butterMixture, milk], 1));
        steps.push(this.beatWithElectricMixer([butterMixture, flourMixture], 1));
      }
    }

    steps.push("Slowly combined milk, flour mixture, and butter mixture: O(n^2)");

    return steps.join("<br/>");
  }

  // O(1)
  bake() {
    return "Poured into muffin tins. Baked for 28-30 minutes: O(1)";
  }

  // See helper function calculateFibonacciNumber: O(2^n)
  fibonacciFrosting(numberOfBatches) {
    const numberToFrost = this.calculateFibonacciNumber(numberOfBatches);
    return `Iced the fibonacci number ${numberToFrost} to all of the cupcakes: O(2^n) (check out the console for the process)`;
  }

  // Helper functions

  beatWithElectricMixer(components, timeInMinutes) {
    return `Beating ${components
      .map(c => this.getIngredientText(c))
      .join(", ")} with mixer at medium speed for ${timeInMinutes} minutes`;
  }

  stirWithSpoon(components) {
    return `Stirring ${components.map(c => this.getIngredientText(c)).join(", ")} with spoon`;
  }

  getIngredientText(component) {
    let text = "";
    if (component.amount) {
      text += `${component.amount} `;
    }
    if (component.ingredient.measurement) {
      text += `${component.ingredient.measurement} `;
    }
    text += `${component.ingredient.name || component.ingredient}`;
    return text;
  }

  // O(2^n)
  calculateFibonacciNumber(number) {
    if (number <= 1) {
      console.log("Fibonacci base case!");
      return number;
    }

    console.log(`Adding fibonacci numbers ${number} and ${number - 1}`);

    return this.calculateFibonacciNumber(number - 1) + this.calculateFibonacciNumber(number - 2);
  }
}
