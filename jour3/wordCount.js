var str = "Fanta orange au jus d\'orange pur",

function wordCount(str) {
    var arr = str.split(" ");
    // console.log(wordCount(str))
    for (var i = 0; i < arr.length; i++) {
        var wordJar = arr[i];
        wordJar = wordJar + 1;
    }
    return wordJar;
}
console.log(wordCount(str))