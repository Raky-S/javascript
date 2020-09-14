"use strict"

//1. Faire une fonction random qui prends un nombre entier de 0 et 100.
//2.stocker la fonction dans une variable
// 3. intégrer la variable dans prompt
// 4. créer 3 conditions quand le chiffre saisi par l'utilisateur est soit  > au random, soit < au random soit === random
// QUESTION: lorsque result.n===num il ne prend pas en copmpte l'instruction

function randomNumber(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
// console.log(randomNumber(100));

var prompt = require("prompt");

var num = randomNumber(1000);

prompt.start();

function displayPrompt() {
  // console.log(num);

  prompt.get({ name: "n", description: "Quel est le nombre ?" }, function (
    err,
    result
  ) {
    if (result.n == num) {
      console.log("Bravo, vous avez trouve le nombre mystère !!!");
    } else if (result.n > num) {
      console.log("cest moins!");
      displayPrompt();
    } else if (result.n < num) {
      console.log("cest plus!");
      displayPrompt();
    }
    // console.log(result)
    // console.log(result.n)
  });
}

displayPrompt();
