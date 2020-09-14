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
  return result;
});
console.log(arr2);
