"Use strict";

var arr = [
  {
    firstName: "Daniel",
    surname: "Beckham",
  },
  {
    firstName: "David",
    surname: "Craig",
  },
];

var arr2 = arr.map(function (objets) {
  var result = { fullname: objets.firstName + " " + objets.surname };
  var result1 = Object.assign(objets, result);

  return result1;
});
console.log(arr2);
