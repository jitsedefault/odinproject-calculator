/*
Simple javascript calculator. Homework from The Odin Project. 
Do what you want with it. - jitsedefault
*/

let calcArray = [];

// takes input and does things with it
function calcInput(operator){
    if (Number.isInteger(parseInt(operator))){
        calcArray.push(parseInt(operator));
    }
    else if (operator == 'equals'){
        //call spliceyboi
    }
    else {
        calcArray.push(operator);
    }
    calcDisplay();
}

function calcDisplay(){
    document.getElementById("numDisplay").innerHTML = calcArray.toString();
}

function add(num1,num2){
    return num1 + num2;
}

function sub(num1,num2){
    return num1 - num2;
}

function mul(num1,num2){
    return num1 * num2;
}

function div(num1,num2){
    return num1 / num2;
}
