var minmaj = 65;
var maxmaj = 90; 
var minmin = 97;
var maxmin = 122;

var str = 'abCZ'
// console.log(str);
var str = '';

function rot13(str) {
  var result = '';
  
  for (var i = 0; i < str.length; i++) {
    
    if (str.charCodeAt(i) >= minmaj && str.charCodeAt(i) <= maxmaj) {
      result += String.fromCharCode(str.charCodeAt(i) + 13)
    } else (str.charCodeAt(i) >= maxmaj); { 
      result += String.fromCharCode((str.charCodeAt(i)+13)-26);
    }
  }
  return result;
}
console.log(rot13('abCZ'));

// function rot13(str) {
//   var result = "";

//   for (var i = 0; i < str.length; i++) {
//     if (str.charCodeAt(i) >= 65 || str.charCodeAt(i) <= 90) {
//       String.fromCharCode(str.charCodeAt(i) + 13);
//     } else String.fromCharCode(str.charCodeAt(i) + 13) - 26;
//     // console.log(str);

//     if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {
//       String.fromCharCode(str.charCodeAt(i) + 13);
//     } else String.fromCharCode(str.charCodeAt(i) + 13) - 26;

//     // else (String.fromCharCode(str.charCodeAt(i) + 13) > 90 && (String.fromCharCode(str.charCodeAt(i) + 13) > 122){
//     result = String.fromCharCode(str.charCodeAt(i) + 13) - 26;
//   }
//   return result;
// }

// console.log(rot13("AbcZ"));

// String.fromCharCode( str.charCodeAt(i) + 13 )

// faire une boucle pour parcourir toute la string
// les lettres dans str => 13 lettres plus que dans str
// arrivée à la fin des maj ou des min la boucle se referme sur a ou A
/*var str = "";

function rot13(str) {
  var result = "";

  for (var i = 0; i < str.length; i++) {
    result += String.fromCharCode(str.charCodeAt(i) + 13);
    if (result > 90) {
      result += String.fromCharCode((str.charCodeAt(i) + 13 )- 26);
    }
  }
  return result;
}
console.log(rot13("acFZy"));*/
