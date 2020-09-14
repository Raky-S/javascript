// EXO réalisé étape par étape par avec l'explication de Andy

//string => array de mots
function stringToArray(string) {
  // console.log("stringToArray");
  let arr = string.split(" ");
  return arr;
}

function firstLetterCapital(word) {
  // console.log("First letter execution");
  //1ere lettre du mot en maj
  let firstLetter = word.substring(0, 1).toUpperCase();
  //autres lettre min
  let othersLetter = word.substring(1).toLowerCase();
  let newWord = firstLetter + othersLetter;
  return newWord;
}

//array => string
function arrayToString(array) {
  // console.log("array to str executed");
  let newString = array.join(" ");
  return newString;
}

// arrayToString(['Fire', 'Air', 'Water'])
function transformEachWord(array) {
  let newArray = array;
  for (let index = 0; index < array.length; index++) {
    newArray[index] = firstLetterCapital(array[index]);
  }
  return newArray;
}
function letterCapitalise(string) {
  let array = stringToArray(string);
  for (let index = 0; index < array.length; index++) {
    array[index] = firstLetterCapital(array[index]);
  }
  let finalSentence = arrayToString(array);
  // console.log(finalSentence);
}

letterCapitalise("je rentre a LA MAISON");

//Exo fait par Andy

/*const letterCapByAndy = (string) =>
  string
    .split(" ")
    .map(
      (word) =>
        word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
    )
    .join(" ");    
const letterCapByAndyII = (string) =>
  string
    .split(" ")
    .map((word) => firstLetterCapital(word))
    .join(" ");

    const letterCapByAndyIII = (string) =>
    transformEachWord(string.split(" "))
    .join(" ");

console.log(letterCapByAndyIII("hello le monde"));*/

