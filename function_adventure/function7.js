"Use strict";

function getHello(str) {
  var helloName = "Hello " + str;
  return helloName;
}
getHello();

var result = getHello("Pierre");
var result1 = getHello("Paul");
var result2 = getHello("Jacque");
console.log(result);
console.log(result1);
console.log(result2);
