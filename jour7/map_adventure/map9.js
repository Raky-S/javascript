"Use strict";

var arr = ["apple", "croissant", "pear"];

var arr2 = arr.map(function (objets) {
  return objets.replace(objets, "<li>" + objets + "</li>");
});
console.log(arr2);
