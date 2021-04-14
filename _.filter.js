const _ = {};

_.filter = function (list, callback) {
  // create new array
  const storage = [];
  // loop through the array
  // for (let index = 0; index < list.length; index++) {
  //     // check if the array is true
  //    if (callback(list[index], index, list)) {
  //     // if return true, push it into storage
  //     // we just need the value, so push the value
  //       storage.push(list[i])
  //    }
  // }
  _.each(list, function (value, index, list) {
    if (callback(value, index, list)) {
      // if return true, push it into storage
      // we just need the value, so push the value
      storage.push(value);
    }
  });
  // return array
  return storage;
};

const videoData = [
  {
    name: "Mrs. White",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Rusty",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
];

const suspects = _.filter(videoData, function (suspectObject) {
    return suspectObject.present
});

const suspectNames = _.map(suspects, suspect => {
  return suspect.name
})