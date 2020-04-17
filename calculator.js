/*
Simple javascript calculator. Homework from The Odin Project. 
Do what you want with it. -jitsedefault
*/

let calcArray = [];
let tempArray = [];

// takes input and does things with it
function calcInput(operator){
    // if pressed button is number, push to array
    if (Number.isInteger(parseInt(operator))){
        tempArray.push(operator);
    }
    // equals button calls upon operate() to perform maths
    else if (operator == '='){
        stitchNumbers();
        operate();
    }
    // if operator pressed, stitch numbers together THEN push operator to main array
    else { 
        stitchNumbers();
        calcArray.push(operator); 
    }
    calcDisplay()
}

function calcDisplay(){
    document.getElementById("numDisplay").innerHTML = calcArray + tempArray;
}

// stitches multi-digit numbers together and pushes to main array
function stitchNumbers(){
    let result = '';
    for (let i = 0; i < tempArray.length; i++){
        result += tempArray[i];
    }
    calcArray.push(parseInt(result)); // push to main array
    tempArray = []; // reset array
}

/* This function looks through the array and splices operators and their corresponding numbers.
It then calls the corresponding math function, and finally updates the array with the result. */
function operate(){
    // look for for and execute every multiplication
    const isX = (element) => element == "x"; // allows us to see if current == x
    while (calcArray.includes("x")){ // execute multiplication first
        let oPos = calcArray.findIndex(isX); // find first "x" in array
        let result = mul(calcArray[oPos-1],calcArray[oPos+1]); // math hours
        calcArray.splice(oPos-1, 3, result); // replace operator and numbers with result
    }
    // look for for and execute every div
    const isDiv = (element) => element == "/"; 
    while (calcArray.includes("/")){ 
        let oPos = calcArray.findIndex(isDiv); 
        let result = div(calcArray[oPos-1],calcArray[oPos+1]); 
        calcArray.splice(oPos-1, 3, result); 
    }
    // look for for and execute every addition
    const isAdd = (element) => element == "+"; 
    while (calcArray.includes("+")){ 
        let oPos = calcArray.findIndex(isAdd); 
        let result = add(calcArray[oPos-1],calcArray[oPos+1]); 
        calcArray.splice(oPos-1, 3, result); 
    }
    // look for for and execute every subtraction
    const isSub = (element) => element == "-"; 
    while (calcArray.includes("-")){ 
        let oPos = calcArray.findIndex(isSub); 
        let result = sub(calcArray[oPos-1],calcArray[oPos+1]); 
        calcArray.splice(oPos-1, 3, result); 
    }
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
