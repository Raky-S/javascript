let secondesTotal = 85252

// 1 step secondes into minutes
  // found letfover of  1 secondes
  let secondesLeft = secondesTotal % 60

  // found minutes
  let minutesTotal = Math.floor(secondesTotal/60)
  let minutesLeft=  minutesTotal % 60
  let hours = Math.floor(minutesTotal/60)
// 3 step minutes into hours
 

//mettre 0 devant si la length du nb <2
function convertToTwoDigit(numberToConvert) {
  // console.log("number to convert => ", numberToConvert);
   let digit= numberToConvert + ""
  if (digit.length <=1) {
    digit = "0" + digit
    // console.log("converted to => ", digit);
  }
  return digit;
}

console.log(convertToTwoDigit(hours) +':'+ convertToTwoDigit(minutesLeft) +':'+convertToTwoDigit(secondesLeft))

/*Andy
console.log(convertToTwoDigit(hours),'h',convertToTwoDigit(minutesLeft),'m',convertToTwoDigit(secondesLeft),"s")
console.log(`${convertToTwoDigit(hours)}h${convertToTwoDigit(minutesLeft)}m${convertToTwoDigit(secondesLeft)}s`)*/
// format le txt 14:02:10