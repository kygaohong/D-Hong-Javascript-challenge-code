var array = [1,2,3,4,5];

function sum(array){
	var sum = 0;
	for(i=0; i<array.length; i++){
	sum = sum + array[i];
}
	return sum;
}


console.log(sum(array));

array.splice(2, 0, 6);

console.log(array);

$(".main-content span").text("$6500");