function calcAdd(numbers){
    let sum = 0;
	for (let i = 0; i < numbers.length; i++){
		sum += numbers[i];
	}
	return sum;
}

function calcSub(numbers){
    let sum = 0;
	for (let i = 0; i < numbers.length; i++){
		sum -= numbers[i];
	}
	return sum;
}

function calcMul(numbers){
    let multiply = numbers[0]; // can't declare variable as zero... because 0*anything=0.
	for (let i = 1; i < numbers.length; i++){
		multiply *= numbers[i];
	}
	return multiply;
}

function calcDiv(numbers){
    return numbers[0] / numbers[1];
}
// takes input and performs corresponding tasks
function operate(){
    switch(operator){
        case "add":
            calcAdd(num1,num2);
        case "subtract":
            calcSub(num1,num2);
        case "multiply":
            calcMul(num1,num2);
        case "divide":
            calcDiv(num1,num2);
    }
    switch(numbers){

    }
}