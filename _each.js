const _ = {};

_.map = function (list, callback) {
  var storage = [];
  // for (let i = 0; i < list.length; i++) {
  //    storage.push(callback(list[i], i, list))
  // }
  _.each(list, function (v, i, list) {
    storage.push(callback(v, i, list));
  });
  return storage;
};

_.each = function (list, callback) {
  if (Array.isArray(list)) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i, list);
    }
  } else {
    for (const key in list) {
      callback(list[key], key, list);
    }
  }
};

_.each(["sally", "france", "forgy"], function (name, i, list) {
  if (list[i + 1]) {
    console.log(name, "is younger than ", list[i + 1]);
  } else {
    console.log(name, "is oldest");
  }
});
