
var num = 4

function firstFactorial(num) {
    var total = 2;

    for (var i = 1; i <= num; i++) {
        total *= i
    }
    return total
}
console.log(firstFactorial(num))

