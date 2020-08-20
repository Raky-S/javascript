// /* Créer le fichier exOh.js
var str = " ";
// utiliser une fonction exOh(str)
function exOh(str) {
  var xAndO =0 ;
  // console.log(str)
  var ex = 0;
  var oh = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      ex = ex + 1;
    } else if (str[i] == "o") {
      oh = oh + 1;
    }
    xAndO = Boolean(ex === oh)
  }
  return xAndO
}
console.log(exOh("xoxoxoxoxxo"));

/*
qui prend en paramètre str 
retourne true s’il y a un nombre égale de x et de o, 
retournera false. 


Exemple :

si str est égale à “xooxxxxooxo”, alors la fonction 
retournera false car il y a 6 x et 5 o */
