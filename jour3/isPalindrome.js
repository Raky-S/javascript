// 1 créer une fonction isPalindrome(str)
// 
// 2  le paramètre str et retourne true si c'est un palindrome
// autrement la fonction retourne false.
// Par exemple : racecar donne racecar

/*var str = "kayak";
function isPalindrome(str) {
  
  // console.log(str);
  for (var i = 0; i < str.length ; i++) {
    // if (str.length[i] === str.length[i]-1) {
      // console.log("true");
    Boolean(str.length === str.length-1)
      }
  }
   return rts;
}
console.log(str);
console.log(isPalindrome("eyes"));
console.log(isPalindrome("racecar"));*/


// Fait avec les filles

function isPalindrome(str) {

  var strInverse = ("");
  
  for (var i = 0; i < str.length; i++) {
      // str += 1;
      strInverse = str[i] + strInverse;
  }
  if (strInverse !== str) {
  
      return false;
  
  } else {
  
      return true;
  
  }
  }
  
  console.log(isPalindrome('kayak'))