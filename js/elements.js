const base_chance = 0.5;
const high_chance = 0.95;

export const elements = {
  clear: {
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
    red: 0.48,
    green: 0.38,
    blue: 0.29,
    density: 0.9,
    gravity: 0.8,
    slip: 1,
    slide: 0,
    scatter: 0.4,
    reactions: [],
    selfReactions: [],
  },
  coffeebean: {
    red: 0.48,
    green: 0.62,
    blue: 0.69,
    density: 0.95,
    gravity: 1,
    slip: 0.05,
    slide: 0.7,
    scatter: 0,
    reactions: [],
    selfReactions: [],
  },
  milk: {
    red: 0.04,
    green: 0.09,
    blue: 0.15,
    density: 0.6,
    gravity: 0.8,
    slip: 1,
    slide: 0,
    scatter: 0.4,
    reactions: [],
    selfReactions: [],
  },

  //water + coffee bean
  coffee: {
    red: 0.48,
    green: 0.5,
    blue: 0.49,
    density: 0.7,
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
    density: 0.45,
    gravity: 0.85,
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
    gravity: 0.92,
    slip: 1,
    slide: 0,
    scatter: 0.2,
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
