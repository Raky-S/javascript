// console.log(parseInt(process.argv[2]));
// console.log(process.argv);
var num = parseInt(process.argv[2]); // la ligne 2 avec mon argument "3"
// faire une fonction
function tableMult(num) {
  //  console.log(parseInt(process.argv[2]));
  
  // dans mon for déjà pret, index= i
  for (var i = 1; i < 11; i++) {
    var multi = num * i;
    // var result = (num + " * " + i + " = " + multi)
    console.log(num + " * " + i + " = " + multi);
  }
  // return result;
}
tableMult(num);
// console.log(tableMult(num) + " * " + i + " = " + multi);
// console.log(multi);
