

var now = new Date();

function ageCalculator(date) {
  var toto = new Date(date);
  var age = 0;
  
    age = now.getFullYear() - toto.getFullYear();
    // console.log(now.getFullYear());
    // console.log(dateOfBirth.getFullYear());
    // console.log(now.getFullYear() - dateOfBirth.getFullYear());
    // console.log(age);
  
  return age;
}
console.log(ageCalculator('January 13, 1980 11:20:00') + 'ans');

/*/ var jour = new date();
// var today = jour.getUTCMilliseconds()
var birth = new Date("January 13, 1980 11:20:00");
// var now = new date ();

// var now = date - date1
// var mili = date.getUTCMilliseconds()
console.log(birth);*/

/*var anniversaire = new Date(1994 , 11, 10); 
var copie = new Date();
console.log(copie.setTime(anniversaire.getTime()));*/


/* function ageCalculator(date) {
  var date = new date ("January 31, 1980 11:20:00")
 }
console.log(ageCalculator())
*/
/*
var dateOfBirth = new Date("January 13, 1980 11:20:00");
// console.log(dateOfBirth.toString());

function ageCalculator(date) {
  var date = new date();
  var age = date.getMilliseconds();
  age = date / 1000;
}
console.log(ageCalculator.getMillisec("January 31, 1980 11:20:00"));
*/