const base_chance = 0.5;
const high_chance = 0.95;

export const elements = {
  clear: {
    name: "clear",
    red: 0,
    green: 0,
    blue: 0,
    density: 0,
    gravity: 0,
    slip: 0,
    slide: 0,
    scatter: 0,
    reactions: [],
    selfReactions: [],
  },
  wall: {
    name: "wall",
    red: 1,
    green: 1,
    blue: 1,
    density: 1,
    gravity: 0,
    slip: 0,
    slide: 0,
    scatter: 0,
    reactions: [],
    selfReactions: [],
    hidden: true,
  },
  water: {
    name: "water",
    red: 0.48,
    green: 0.38,
    blue: 0.29,
    density: 0.8,
    gravity: 1,
    slip: 1,
    slide: 0,
    scatter: 0.4,
    reactions: [],
    selfReactions: [],
  },
  coffeebean: {
    name: "coffee bean",
    red: 0.48,
    green: 0.62,
    blue: 0.69,
    density: 0.95,
    gravity: 1,
    slip: 0.05,
    slide: 0.8,
    scatter: 0,
    reactions: [],
    selfReactions: [],
  },
  milk: {
    name: "milk",
    red: 0.04,
    green: 0.09,
    blue: 0.15,
    density: 0.8,
    gravity: 1,
    slip: 1,
    slide: 0,
    scatter: 0.4,
    reactions: [],
    selfReactions: [],
  },
  chocolatesyrup: {
    name: "chocolate syrup",
    red: 0.8,
    green: 0.84,
    blue: 0.88,
    density: 1,
    gravity: 0.2,
    slip: 0.5,
    slide: 0.3,
    scatter: 0,
    reactions: [],
    selfReactions: [],
  },
  vanillasyrup: {
    name: "vanilla syrup",
    red: 0.15,
    green: 0.28,
    blue: 0.36,
    density: 1,
    gravity: 0.2,
    slip: 0.5,
    slide: 0.3,
    scatter: 0,
    reactions: [],
    selfReactions: [],
  },
  cinnamonpowder: {
    name: "cinnamon powder",
    red: 0.29,
    green: 0.78,
    blue: 0.99,
    density: 0.1,
    gravity: 1,
    slip: 0.5,
    slide: 1,
    scatter: 0,
    reactions: [],
    selfReactions: [],
  },
  gingerpowder: {
    name: "ginger powder",
    red: 0.05,
    green: 0.08,
    blue: 0.31,
    density: 0.1,
    gravity: 1,
    slip: 0.5,
    slide: 1,
    scatter: 0,
    reactions: [],
    selfReactions: [],
  },
  matchapowder: {
    name: "matcha powder",
    red: 0.52,
    green: 0.29,
    blue: 0.67,
    density: 0.1,
    gravity: 1,
    slip: 0.5,
    slide: 1,
    scatter: 0,
    reactions: [],
    selfReactions: [],
  },

  //water + coffee bean
  coffee: {
    red: 0.48,
    green: 0.5,
    blue: 0.49,
    density: 0.8,
    gravity: 0.9,
    slip: 1,
    slide: 0,
    scatter: 0.2,
    reactions: [],
    selfReactions: [],
    hidden: true,
  },
  //water + milk
  watermilk: {
    red: 0.26,
    green: 0.235,
    blue: 0.22,
    density: 0.5,
    gravity: 0.9,
    slip: 1,
    slide: 0,
    scatter: 0.3,
    reactions: [],
    selfReactions: [],
    hidden: true,
  },
  //milk + coffee bean
  latte: {
    red: 0.26,
    green: 0.3,
    blue: 0.42,
    density: 0.8,
    gravity: 0.9,
    slip: 1,
    slide: 0,
    scatter: 0.2,
    reactions: [],
    selfReactions: [],
    hidden: true,
  },
  //cinnamon + water
  cinnamonwater: {
    red: 0.39,
    green: 0.58,
    blue: 0.64,
    density: 0.8,
    gravity: 0.9,
    slip: 1,
    slide: 0,
    scatter: 0.2,
    reactions: [],
    selfReactions: [],
    hidden: true,
  },
  //cinnamon + milk
  cinnamonmilk: {
    red: 0.17,
    green: 0.44,
    blue: 0.57,
    density: 0.8,
    gravity: 0.9,
    slip: 1,
    slide: 0,
    scatter: 0.2,
    reactions: [],
    selfReactions: [],
    hidden: true,
  },
  //ginger + water
  gingerwater: {
    red: 0.27,
    green: 0.23,
    blue: 0.3,
    density: 0.8,
    gravity: 0.9,
    slip: 1,
    slide: 0,
    scatter: 0.2,
    reactions: [],
    selfReactions: [],
    hidden: true,
  },
  //ginger + milk
  gingermilk: {
    red: 0.05,
    green: 0.09,
    blue: 0.23,
    density: 0.8,
    gravity: 0.9,
    slip: 1,
    slide: 0,
    scatter: 0.2,
    reactions: [],
    selfReactions: [],
    hidden: true,
  },
  //water + matcha
  tea: {
    red: 0.5,
    green: 0.33,
    blue: 0.48,
    density: 0.8,
    gravity: 0.9,
    slip: 1,
    slide: 0,
    scatter: 0.2,
    reactions: [],
    selfReactions: [],
    hidden: true,
  },
  //milk + matcha
  milktea: {
    red: 0.28,
    green: 0.19,
    blue: 0.41,
    density: 0.8,
    gravity: 0.9,
    slip: 1,
    slide: 0,
    scatter: 0.2,
    reactions: [],
    selfReactions: [],
    hidden: true,
  },
  //chocolate + anything
  lighterchocolate: {
    red: 0.8,
    green: 0.84,
    blue: 0.88,
    density: 0.8,
    gravity: 0.8,
    slip: 0.5,
    slide: 0.3,
    scatter: 0,
    reactions: [],
    selfReactions: [],
    hidden: true,
  },
  //vanilla + anything
  lightervanilla: {
    name: "vanilla syrup",
    red: 0.15,
    green: 0.28,
    blue: 0.36,
    density: 0.8,
    gravity: 0.8,
    slip: 0.5,
    slide: 0.3,
    scatter: 0,
    reactions: [],
    selfReactions: [],
    hidden: true,
  },
};

let elementId = 0;
for (const elementName in elements) {
  elements[elementName].id = elementId++;
}

// add reactions

// solid + fluid
elements.coffeebean.reactions.push({
  chance: high_chance,
  becomes: elements.coffeebean,
  singleNeighbor: {
    element: elements.water,
    becomes: elements.coffee,
    minimum: 1,
    maximum: 8,
    affects: 4,
  },
});

elements.coffeebean.reactions.push({
  chance: high_chance,
  becomes: elements.coffeebean,
  singleNeighbor: {
    element: elements.milk,
    becomes: elements.latte,
    minimum: 1,
    maximum: 8,
    affects: 4,
  },
});

elements.coffee.reactions.push({
  chance: base_chance,
  becomes: elements.coffee,
  singleNeighbor: {
    element: elements.coffeebean,
    becomes: elements.coffeebean,
    minimum: 1,
    maximum: 8,
    affects: 4,
  },
});

elements.coffee.reactions.push({
  chance: base_chance,
  becomes: elements.coffee,
  singleNeighbor: {
    element: elements.water,
    becomes: elements.water,
    minimum: 1,
    maximum: 8,
    affects: 4,
  },
});

elements.cinnamonpowder.reactions.push({
  chance: high_chance,
  becomes: elements.cinnamonpowder,
  singleNeighbor: {
    element: elements.milk,
    becomes: elements.cinnamonmilk,
    minimum: 1,
    maximum: 8,
    affects: 4,
  },
});

elements.cinnamonpowder.reactions.push({
  chance: high_chance,
  becomes: elements.cinnamonpowder,
  singleNeighbor: {
    element: elements.water,
    becomes: elements.cinnamonwater,
    minimum: 1,
    maximum: 8,
    affects: 4,
  },
});

elements.gingerpowder.reactions.push({
  chance: high_chance,
  becomes: elements.gingerpowder,
  singleNeighbor: {
    element: elements.water,
    becomes: elements.gingerwater,
    minimum: 1,
    maximum: 8,
    affects: 4,
  },
});

elements.gingerpowder.reactions.push({
  chance: high_chance,
  becomes: elements.gingerpowder,
  singleNeighbor: {
    element: elements.milk,
    becomes: elements.gingermilk,
    minimum: 1,
    maximum: 8,
    affects: 4,
  },
});

elements.matchapowder.reactions.push({
  chance: high_chance,
  becomes: elements.matchapowder,
  singleNeighbor: {
    element: elements.water,
    becomes: elements.tea,
    minimum: 1,
    maximum: 8,
    affects: 4,
  },
});

elements.matchapowder.reactions.push({
  chance: high_chance,
  becomes: elements.matchapowder,
  singleNeighbor: {
    element: elements.milk,
    becomes: elements.milktea,
    minimum: 1,
    maximum: 8,
    affects: 4,
  },
});

// syrups
elements.chocolatesyrup.reactions.push({
  chance: base_chance,
  becomes: elements.chocolatesyrup,
  singleNeighbor: {
    element: elements.water,
    becomes: elements.lighterchocolate,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.chocolatesyrup.reactions.push({
  chance: base_chance,
  becomes: elements.chocolatesyrup,
  singleNeighbor: {
    element: elements.milk,
    becomes: elements.lighterchocolate,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.chocolatesyrup.reactions.push({
  chance: base_chance,
  becomes: elements.chocolatesyrup,
  singleNeighbor: {
    element: elements.watermilk,
    becomes: elements.lighterchocolate,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.chocolatesyrup.reactions.push({
  chance: base_chance,
  becomes: elements.chocolatesyrup,
  singleNeighbor: {
    element: elements.coffee,
    becomes: elements.lighterchocolate,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.chocolatesyrup.reactions.push({
  chance: base_chance,
  becomes: elements.chocolatesyrup,
  singleNeighbor: {
    element: elements.latte,
    becomes: elements.lighterchocolate,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.chocolatesyrup.reactions.push({
  chance: base_chance,
  becomes: elements.chocolatesyrup,
  singleNeighbor: {
    element: elements.cinnamonwater,
    becomes: elements.lighterchocolate,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.chocolatesyrup.reactions.push({
  chance: base_chance,
  becomes: elements.chocolatesyrup,
  singleNeighbor: {
    element: elements.cinnamonmilk,
    becomes: elements.lighterchocolate,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.chocolatesyrup.reactions.push({
  chance: base_chance,
  becomes: elements.chocolatesyrup,
  singleNeighbor: {
    element: elements.gingerwater,
    becomes: elements.lighterchocolate,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.chocolatesyrup.reactions.push({
  chance: base_chance,
  becomes: elements.chocolatesyrup,
  singleNeighbor: {
    element: elements.gingermilk,
    becomes: elements.lighterchocolate,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.chocolatesyrup.reactions.push({
  chance: base_chance,
  becomes: elements.chocolatesyrup,
  singleNeighbor: {
    element: elements.tea,
    becomes: elements.lighterchocolate,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.chocolatesyrup.reactions.push({
  chance: base_chance,
  becomes: elements.chocolatesyrup,
  singleNeighbor: {
    element: elements.milktea,
    becomes: elements.lighterchocolate,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.vanillasyrup.reactions.push({
  chance: base_chance,
  becomes: elements.vanillasyrup,
  singleNeighbor: {
    element: elements.water,
    becomes: elements.lightervanilla,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.vanillasyrup.reactions.push({
  chance: base_chance,
  becomes: elements.vanillasyrup,
  singleNeighbor: {
    element: elements.milk,
    becomes: elements.lightervanilla,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.vanillasyrup.reactions.push({
  chance: base_chance,
  becomes: elements.vanillasyrup,
  singleNeighbor: {
    element: elements.watermilk,
    becomes: elements.lightervanilla,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.vanillasyrup.reactions.push({
  chance: base_chance,
  becomes: elements.vanillasyrup,
  singleNeighbor: {
    element: elements.coffee,
    becomes: elements.lightervanilla,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.vanillasyrup.reactions.push({
  chance: base_chance,
  becomes: elements.vanillasyrup,
  singleNeighbor: {
    element: elements.latte,
    becomes: elements.lightervanilla,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.vanillasyrup.reactions.push({
  chance: base_chance,
  becomes: elements.vanillasyrup,
  singleNeighbor: {
    element: elements.cinnamonwater,
    becomes: elements.lightervanilla,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.vanillasyrup.reactions.push({
  chance: base_chance,
  becomes: elements.vanillasyrup,
  singleNeighbor: {
    element: elements.cinnamonmilk,
    becomes: elements.lightervanilla,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.vanillasyrup.reactions.push({
  chance: base_chance,
  becomes: elements.vanillasyrup,
  singleNeighbor: {
    element: elements.gingerwater,
    becomes: elements.lightervanilla,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.vanillasyrup.reactions.push({
  chance: base_chance,
  becomes: elements.vanillasyrup,
  singleNeighbor: {
    element: elements.gingermilk,
    becomes: elements.lightervanilla,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.vanillasyrup.reactions.push({
  chance: base_chance,
  becomes: elements.vanillasyrup,
  singleNeighbor: {
    element: elements.tea,
    becomes: elements.lightervanilla,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

elements.vanillasyrup.reactions.push({
  chance: base_chance,
  becomes: elements.vanillasyrup,
  singleNeighbor: {
    element: elements.milktea,
    becomes: elements.lightervanilla,
    minimum: 1,
    maximum: 4,
    affects: 2,
  },
});

// fluid + fluid, side-products
elements.milk.reactions.push({
  chance: high_chance,
  becomes: elements.milk,
  singleNeighbor: {
    element: elements.water,
    becomes: elements.watermilk,
    minimum: 1,
    maximum: 8,
    affects: 4,
  },
});

elements.watermilk.reactions.push({
  chance: base_chance,
  becomes: elements.watermilk,
  singleNeighbor: {
    element: elements.water,
    becomes: elements.water,
    minimum: 1,
    maximum: 2,
    affects: 1,
  },
});

elements.watermilk.reactions.push({
  chance: base_chance,
  becomes: elements.watermilk,
  singleNeighbor: {
    element: elements.milk,
    becomes: elements.milk,
    minimum: 1,
    maximum: 2,
    affects: 1,
  },
});

elements.watermilk.reactions.push({
  chance: base_chance,
  becomes: elements.watermilk,
  singleNeighbor: {
    element: elements.matchapowder,
    becomes: elements.tea,
    minimum: 1,
    maximum: 2,
    affects: 1,
  },
});

elements.watermilk.reactions.push({
  chance: base_chance,
  becomes: elements.watermilk,
  singleNeighbor: {
    element: elements.gingerpowder,
    becomes: elements.gingerwater,
    minimum: 1,
    maximum: 2,
    affects: 1,
  },
});

elements.cinnamonwater.reactions.push({
  chance: base_chance,
  becomes: elements.cinnamonwater,
  singleNeighbor: {
    element: elements.water,
    becomes: elements.water,
    minimum: 1,
    maximum: 2,
    affects: 1,
  },
});

elements.cinnamonmilk.reactions.push({
  chance: base_chance,
  becomes: elements.cinnamonmilk,
  singleNeighbor: {
    element: elements.milk,
    becomes: elements.milk,
    minimum: 1,
    maximum: 2,
    affects: 1,
  },
});

elements.gingerwater.reactions.push({
  chance: base_chance,
  becomes: elements.gingerwater,
  singleNeighbor: {
    element: elements.water,
    becomes: elements.water,
    minimum: 1,
    maximum: 2,
    affects: 1,
  },
});

elements.gingermilk.reactions.push({
  chance: base_chance,
  becomes: elements.gingermilk,
  singleNeighbor: {
    element: elements.milk,
    becomes: elements.milk,
    minimum: 1,
    maximum: 2,
    affects: 1,
  },
});

elements.tea.reactions.push({
  chance: base_chance,
  becomes: elements.tea,
  singleNeighbor: {
    element: elements.water,
    becomes: elements.water,
    minimum: 1,
    maximum: 2,
    affects: 1,
  },
});

elements.milktea.reactions.push({
  chance: base_chance,
  becomes: elements.milktea,
  singleNeighbor: {
    element: elements.milk,
    becomes: elements.milk,
    minimum: 1,
    maximum: 2,
    affects: 1,
  },
});
