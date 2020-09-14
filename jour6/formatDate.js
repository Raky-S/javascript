'Use strict'
var date = new date();


function formatDate(date) {
var dateFrench = date.getDate() + '/' + date.getMonth() + '/'+ date.getFullYear();
return dateFrench;
}

console.log(formaDate('2018-11-17'));
console.log(formaDate('1986-07-03'))
console.log(formaDate('1993-02-02'))