var first = 123;
var second = 456;

function swap(first, second) {
    // aux=aux.replace (first, second)
    // return [first,second]
    var aux;


    aux = first
    first = second
    second = aux

    return [first, second]
}


console.log(swap(first, second))



//  var first = [25];
//  var seconde = [30];

//  [first, seconde] = [seconde, first];

//  console.log (first, seconde)