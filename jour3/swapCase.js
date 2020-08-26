// Créer une fonction swapCase(str)

// retourne la string avec la case inversée des caractères
// Hello World => hELLO wORLD.

function swapCase(str) {
    var arr = str.split("");

  for (var i = 0; i < str.length; i++) {
    if (arr[i] === arr[i].toLowerCase()) {
      arr[i] = arr[i].toUpperCase();
    } else if (arr[i] === arr[i].toUpperCase()) {
      arr[i] = arr[i].toLowerCase();
    }
  }
  return arr.join("");
}
console.log(swapCase("Voila VOila vOILa"));
