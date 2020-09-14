var arr = [1, 2, 3, 4];

var arr1 = arr.map(function (isEven) {
  return isEven % 2 === 0;
});

console.log(arr1);

var arr = [1, 2, 3, 4];
var arr2 = arr.map(function (isEven) {
  return Boolean(isEven % 2 === 0);
});
console.log(arr2);
