const _ = {};

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
