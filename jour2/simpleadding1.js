
var num = 13;

function simpleAdding(num) {
 var total=0

    for (var i = 1; i < num; i++) {

        total = total + i;
    }
    return total;
}
console.log(simpleAdding(num));
