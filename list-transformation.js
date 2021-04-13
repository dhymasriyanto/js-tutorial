function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(" ")[1],
    speak() {
      console.log("My name is", name);
    },
  };
}

var suspects = ["Miss Scarlet", "Colonel Mustard", "Mr. White"];

var suspectsList = [];

CreateSuspectObjects(suspects[0]);

for (let i = 0; i < suspects.length; i++) {
  var suspect = CreateSuspectObjects(suspects[i]);
  suspectsList.push(suspect)
}
