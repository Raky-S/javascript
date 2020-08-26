var date = new Date();
var jourJ = 0;
function formatDateToday() {
  var jourJ = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

  return jourJ;
}
console.log(formatDateToday());
