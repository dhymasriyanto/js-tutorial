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

function catchTheSus() {
  for (let index = 0; index < game.suspects.length; index++) {
    for (const key in game.suspects[i]) {
       if (game.suspects[i][key] === "Rusty") {
          console.log("Found /'em!") 
       }
       else{
           console.log("Next time!")
       } 
    }
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
