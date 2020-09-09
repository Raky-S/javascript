var num = 2

function isEven(num) {
    
    if (num > 0){
        console.log('true');
    } else { 
        console.log ('false');
    }
    return num % 2 ===0;

}

console.log(isEven(num))