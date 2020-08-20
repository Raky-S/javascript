/*
function bubbleSort(arr, start, end) { 
    if(start >= end) { 
        return; 
    } 
    
    for(var i = 0; i < end-1; i++) { 
        for(var j = 0; j < end-i-1; j++) { 
            if(arr[j] >= arr[j+1]) { 
                states[j] = 1; 
   
                // Call to swap function 
                await swap(arr, j, j+1); 
                states[j+1] = 0; 
            } 
            states[j] = 2; 
        } 
    } 
    return arr; 
} 
*/
// étape 1 string to array

var inString = "hello";

// console.log(stringIsArray)

function alphabetSoup(str) {
  var arr = str.split("");
  //   console.log(alphabetSoup)

  for (var i = 0; i <= arr.length; i++) {
    for (var j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // console.log('tour ' + j)
        // console.log(arr);
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
console.log(alphabetSoup(inString).join(" "));
console.log(alphabetSoup("raky").join(" "));
console.log(alphabetSoup("heyllo").join(" "));
console.log(alphabetSoup("konexio").join(" "));

/*/ string to array
function strToArray(stringTheFirst) {
    // console.log("test strtoarray");
    var arrayOfStr = stringTheFirst.split('');
    return arrayOfStr;
}
strToArray('hello')

function arrayToAscii(arraystr) {
    console.log("test arraytoascii")
    var letterByLetter = array
    
    for (let index = 0; index < array.length; index++) {
        letterByLetter[index] = strToArray (array[index]);
      };
    return letterByLetter;
}

arrayToAscii (strToArray('hello').charCodeAt(2))
*/

/*var stringO = "hello"
var ch = stringO.split('');
function name (stringO) {
    
    for (let index = 0; index < stringO.length; index++) {
        const element = array[index];
        
    }
}

var i = ch.charCodeAt();
console.log(i);



/*function alphabetSoup (str) {
    var min = 65;
    var max = 90;
    var strOut= '';


    for (var i= 0; i < strIn.length; index++) {
        ver i = array[index];
        
    }
    
}*/
// faire de ma str un objet pour pouvoir manipuler chaque lettre
// remettre mes lettres dans l'ordre alphabetique
// renvoyer mon objet en string
