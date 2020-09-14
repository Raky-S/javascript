"Use strict";

//trouver toutes premières lettres de chaque mot
//utiliser Regex pour ça
//les remplacer avec leur majuscule
// utiliser toUpperCase pour mettre les premières lettres en maj


// function letterCapitalizeRegex(str) {
  var str = "what a wonderful world";
  //   console.log(word);
  var word = str.replace(/\b[a-z]/g, function(param){
    var capitalize = param.toLocaleUpperCase();
      return capitalize;
  });
console.log(word)



