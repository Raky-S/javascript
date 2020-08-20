var str = "konexio";

function vowelCount(str) {
  // var vowelBox = str.split("");
  //   console.log(str.split(""))
  var vowelBox = ["a", "e", "i", "o", "u", "y"];
  //   console.log(vowelBox);}
  var vowelJar = 0;
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowelBox.length; j++) {
      if (str[i] === vowelBox[j]) {
        vowelJar = vowelJar + 1;
      }
    } 
  }
  return vowelJar;
}
console.log(vowelCount(str));
console.log(vowelCount("raky"));
console.log(vowelCount("heyllo"));
