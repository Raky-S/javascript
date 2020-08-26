// fonction letterCount(str, search)
// qui prend en str un string et search un string d’une lettre
// et qui retournera le nombre de fois que la lettre search dans la phrase.

// str = Super Nintendo, Sega Genesis, when I was dead broke man, I couldn’t picture this
// search = ‘i’
var str = "okokok";
var search = "o";

function letterCount(str, search) {
  //   var arr = str.split("");
  var letterJar = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === search) {
      letterJar = letterJar + 1;
    }
  }
  return letterJar;
}

console.log(letterCount("oh joie, la joie de vivre, vivre pour la joie", "j"));
