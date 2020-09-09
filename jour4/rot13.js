var minmaj = 65;
var maxmaj = 90;
var minmin = 97;
var maxmin = 122;

var str = "abCZ";
// console.log(str);
function rot13(str) {
  var result1 = "";
  var result2 = "";
  var result3 = "";
  var result4 = "";
  for (var i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) >= minmaj && str.charCodeAt(i) <= maxmaj) {
      result1 += String.fromCharCode(str.charCodeAt(i) + 13);
      console.log(result1 + "-------------rez1");
      result1 >= maxmaj - 26;
      console.log(result2 + "-----------rez2");
    }
    if (str.charCodeAt(i) + 13 >= minmin && str.charCodeAt(i) + 13 <= maxmin) {
      result3 += String.fromCharCode(str.charCodeAt(i) + 13);
      console.log(result3 + "------------rez3");
    } else if (result3 >= maxmin) {
      result4 += result3 + (26 - 13) + 13;
      console.log(result4 + "-------------rez4");
    }
  }
  return [result1, result2, result3, result4];
}

console.log(rot13("azCOZ"));

/*var minmaj = 65;
var maxmaj = 90;
var minmin = 97;
var maxmin = 122;

var str = "abCZ";
// console.log(str);
function rot13(str) {
  var result = "";

  for (var i = 0; i < str.length; i++) {
    if (
      (str.charCodeAt(i) >= minmaj && str.charCodeAt(i) <= maxmaj) ||
      (str.charCodeAt(i) >= minmin && str.charCodeAt(i) <= maxmin)
    ) {
      result = String.fromCharCode(str.charCodeAt(i) + 13);
      console.log(result + "rez1");
    }
    if ((str.charCodeAt(i)+13) >= maxmaj ) {
      result = String.fromCharCode(((str.charCodeAt(i)) + 13) - 26);
      console.log(result + "rez2");
    }
  }
  return result;
}

console.log(rot13("azCOZ"));*/

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

  for (var i = 0 ; i < str.length; i++) {
    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 77) {
      result += String.fromCharCode(str.charCodeAt(i) + 13);
    } else if (str.charCodeAt(i) >= 78 && str.charCodeAt(i) <= 90) {
      result += String.fromCharCode(str.charCodeAt(i) - 13);
    } else if (str.charCodeAt(i) >= 96 && str.charCodeAt(i) <= 109) {
      result += String.fromCharCode(str.charCodeAt(i) + 13);
    } else if (str.charCodeAt(i) >= 110 && str.charCodeAt(i) <= 122) {
      result += String.fromCharCode(str.charCodeAt(i) - 13);
    }
  }
  return result;
}
console.log(rot13("acFZa"));*/
