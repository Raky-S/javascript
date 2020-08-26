// créer une fonction passwordGen2(num),
var num = 8;

function passwordGen2(num) {
  var min = 65;
  var max = 90;
  var password = "";

  if (num < 6 || num > 15) {
    return "error";
  }

  for (var i = 0; i < num; i++) {
    var index = Math.floor(Math.random() * (max - min) + min);
    password = password + String.fromCharCode(index);
  }
  return password;
}

console.log(passwordGen2(4));

// qui prend en paramètre un entier
// qui sera compris entre 6 et 15
// et qui va générer de manière aléatoire,
// un mot de passe de la taille de cet entier.
// Le mot de passe retourné sera en majuscules.
// Si num n’est pas compris entre 6 et 15, la fonction retournera error.
