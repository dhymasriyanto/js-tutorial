const game = {
  suspects: [
    {
      name: "Rusty",
      color: "orange",
    },
    {
      name: "Miss Scarlet",
      color: "red",
    },
  ],
};

function loopThis() {
  for (let i = 0; i < game.suspects.length; i++) {
    const element = game.suspects[i];
  }
}

function loopThen() {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
    }
  }
}

loopThis();
