/*
Simple javascript calculator. Homework from The Odin Project. 
Do what you want with it. -jitsedefault
*/

let mathArray = [];
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
        mathArray.push(operator); 
    }
    calcDisplay()
}

function calcDisplay(){
    document.getElementById("numDisplay").innerHTML = mathArray.join(" ") + " " + tempArray.join("");
}

// stitches multi-digit numbers together and pushes to main array
function stitchNumbers(){
    if (tempArray.length > 0){
        let result = '';
        for (let i = 0; i < tempArray.length; i++){
            result += tempArray[i];
        }
        mathArray.push(parseInt(result)); // push to main array
        tempArray = []; // reset array
    }
}

/* This function looks through the array and splices operators and their corresponding numbers.
It then calls the corresponding math function, and finally updates the array with the result. */
function operate(){
    // look for for and execute every multiplication
    const isX = (element) => element == "x"; // allows us to see if current == x
    while (mathArray.includes("x")){ // execute multiplication first
        let oPos = mathArray.findIndex(isX); // find first "x" in array
        let result = mul(mathArray[oPos-1],mathArray[oPos+1]); // math hours
        mathArray.splice(oPos-1, 3, result); // replace operator and numbers with result
    }
    // look for for and execute every div
    const isDiv = (element) => element == "/"; 
    while (mathArray.includes("/")){ 
        let oPos = mathArray.findIndex(isDiv); 
        let result = div(mathArray[oPos-1],mathArray[oPos+1]); 
        mathArray.splice(oPos-1, 3, result); 
    }
    // look for for and execute every addition
    const isAdd = (element) => element == "+"; 
    while (mathArray.includes("+")){ 
        let oPos = mathArray.findIndex(isAdd); 
        let result = add(mathArray[oPos-1],mathArray[oPos+1]); 
        mathArray.splice(oPos-1, 3, result); 
    }
    // look for for and execute every subtraction
    const isSub = (element) => element == "-"; 
    while (mathArray.includes("-")){ 
        let oPos = mathArray.findIndex(isSub); 
        let result = sub(mathArray[oPos-1],mathArray[oPos+1]); 
        mathArray.splice(oPos-1, 3, result); 
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
