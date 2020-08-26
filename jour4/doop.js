// console.log (process.argv)

// console.log(parseInt(process.argv[2]) + parseInt(process.argv[3]));
// console.log(parseInt(process.argv[2]) / parseInt(process.argv[3]));
// console.log(parseInt(process.argv[2]) * parseInt(process.argv[3]));
// console.log(parseInt(process.argv[2]) - parseInt(process.argv[3]));

// var para = parseInt(process.argv[2])

// console.log(para)

// console.log(process.argv);

console.log(
  parseInt(process.argv[2]) + process.argv[3] + parseInt(process.argv[4])
);
/*
/*function doop (param1, param2, param3) {
  var param1 = parsInt(process.argv[2])
  var param2 = process.argv[3]
  var param3 = parsInt(process.argv[4])
  var operator = param2
  console.log(operator);*
   switch (operator) {
    case '+':
      console.log(parseInt(process.argv[2])+ (process.argv[3]) + parseInt(process.argv[4]));    // Addition
    break;
    case '-':
      console.log(param1,param2,param3);  // Soustraction
    break;
    case '*':
      console.log(param1, param2, param3);  // Multplication
    break;
    case '/':
      console.log(param1,param2,param3);  // Division
    break;
    case (doop.length !== 3):
      console.log("error");  // Si le nombre de paramètres différent de 3= error
    break;
    default:
      console.log("not rated");  // Instructions à exécuter lorsqu'aucune des valeurs ne correspond
  }
// }
console.log(doop(parsInt(process.argv[2]),(process.argv[3]),parsInt(process.argv[4]))) */
