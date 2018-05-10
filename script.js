//here logic goes

//Вывести в браузер результаты первый четырех заданий из arrays.js

var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");
var result3 = document.getElementById("result3");
var result4 = document.getElementById("result4");
//1
// for(let i = 0; i < lessThen.length ; i++ ){
// 	result1.insertAdjacentHTML('beforebegin','<div>' +  lessThen[i].firstName + " " + lessThen[i].lastName +  " " + lessThen[i].year + '</div>');
// }
lessThen.forEach(function(element) {
  result1.insertAdjacentHTML('beforebegin','<div>' +  element.firstName + " " + element.lastName +  " " + element.year + '</div>');
});
//2
for(let i = 0; i < names.length ; i++ ){
	result2.insertAdjacentHTML('afterbegin','<div>' +  names[i] + '</div>');
}
//3
for(let i = 0; i < actors.length ; i++ ){
	result3.insertAdjacentHTML('beforeend','<div>' +  actors[i].year + '</div>');
}

//4
result4.insertAdjacentHTML('afterend','<div>' +  sum + '</div>');
