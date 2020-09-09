// En JavaScript, créer une fonction secondGreatLow(arr)
// qui prendra en paramètre un array de nombres stockés dans arr
// retournera la deuxième valeur plus petite valeur et deuxième plus grande valeur.
// L’array ne doit pas être vide and devra contenir au moins deux nombres.
// Cela peut devenir compliqué s’il n’y a que deux nombres.

// faire mon array

var numArray = [9, 2, 2, 83, 85, 83, 91];

// faire une function qui prend un array et le sort dans l'ordre croissant
numArray.sort(function (a, b) {
  // var max = Math.max(...numArray);
  // var min = Math.min(...numArray);
  var newMax = [0];
  var newMin = [0];

  // construire une boucle for pour extraire le second numéro le plus petit
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > numArray[i+1]) {
      newMin = numArray[i];
      // console.log(newMin);
      break;
    }
    return newMin;
  }
  // construire une boucle for pour extraire le second numéro le plus grand
  // partir de la fin pour que le deuxième nombre le plus grand soit à la deuxième place
  for (var i = numArray.length; i > 0; i--) {
    if (numArray[i] < numArray[i-1]) {
      newMax = numArray[i-1];
      // console.log(newMax + "  combien de fois tu reviens");
      break;
    }
    return newMax;
  }
  return a - b;
});

var newArray = numArray()

console.log(newArray);

/* 
numArray.sort(function (a, b) {
  var max = Math.max(...numArray);
  var min = Math.min(...numArray);
  var newMax = [0];
  var newMin = [0];

  // construire une boucle for pour extraire le second numéro le plus petit
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i] > min) {
      newMin = numArray[i];
      a = newMin ;
      console.log(newMin);
      break;
    }
  }
   // construire une boucle for pour extraire le second numéro le plus grand
  for (var i = numArray.length; i < 0 ; i--) {
    if (numArray[i] > max ) {
      newMax = numArray[i];
      b = newMax ;
      console.log(newMax + '  combien de fois tu reviens');
      // break;
    }
    
  }
  return a - b;
});
*/

/*
function secondGreatLow(numArray) {
  var max = Math.max(...numArray);
  var min = Math.min(...numArray);
  // console.log(max);
  var line = [];

  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i + 1] < min) {
      var minM = numArray[i + 1] ;
      console.log(minM);
      break;
    }
  }
  for (var i = 0; i < numArray.length; i++) {
    if (numArray[i + 1] > max) {
      var maxM = numArray[i +1];
      // console.log(Math.max(...arr));
      break;
    }
    line = [minM, maxM ]
  }
  return line;
}
console.log(secondGreatLow([9, 83, 83, 91])); */

// var arr = [9, 25, 5, 17, 83, 91, 11];
// var sorted = arr.sort();
// console.log(sorted);

// var numArray = [9, 17, 83, 91, 7];
// numArray.sort(function (a, b) {
//   var max = Math.max(...numArray);
//   var min = Math.min(...numArray);
//   var line = a - b;

//   for (var i = 0; i < line.length; i++) {
//     if (line[i] < min) {
//       console.log(Math.min(...numArray));
//       break;
//     }
//   }
//   for (var i = 0; i < line.length; i++) {
//     if (line[i] > max) {
//       console.log(Math.max(...numArray));
//       break;
//     }
//   }
//   return a - b;
// });

// console.log(numArray);

// faire une function qui prend un array
/*function secondGreatLow(arr) {
  var arr = [9, 25, 5, 17, 83, 91, 11];
  //   var line = [];
  // faire un jar pour contenir le secondGreatLow
  var secGreatJar = [];
  var secLowJar = [];

  // faire une boucle qui selectionne secondGreatLow
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;

        // console.log(arr[j]);
      }
    }
  }
  return arr;
}
console.log(secondGreatLow([8, 9, 10, 12, 13])); si je suis ce raisonnement  il me reste une double boucle encore*/
/*
var arr = [5,7,2,9,8]
function secondGAndL(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      min = arr[i + 1];
      console.log(min);
      break;
    }
  }
}
*/
/*
var arr = []
*/
