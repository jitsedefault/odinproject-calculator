/*
Simple javascript calculator. Homework from The Odin Project. 
Do what you want with it. - jitsedefault
*/

let calcArray = [];

// takes input and does things with it
function calcInput(operator){
    // if pressed button is number, convert to int and push to array
    if (Number.isInteger(parseInt(operator))){
        calcArray.push(parseInt(operator));
    }
    // equals button calls upon operate() to perform maths
    else if (operator == '='){
        operate();
    }
    // else if pressed button is operator, just push
    else { 
        calcArray.push(operator); 
    }
    calcDisplay();
}

function calcDisplay(){
    document.getElementById("numDisplay").innerHTML = calcArray.toString();
}

/* This function looks through the array and splices operators and its corresponding numbers.
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
    const isDiv = (element) => element == "/"; // allows us to see if current == x
    while (calcArray.includes("/")){ // execute multiplication first
        let oPos = calcArray.findIndex(isDiv); // find first "x" in array
        let result = div(calcArray[oPos-1],calcArray[oPos+1]); // math hours
        calcArray.splice(oPos-1, 3, result); // replace operator and numbers with result
    }
    // look for for and execute every addition
    const isAdd = (element) => element == "+"; // allows us to see if current == x
    while (calcArray.includes("+")){ // execute multiplication first
        let oPos = calcArray.findIndex(isAdd); // find first "x" in array
        let result = add(calcArray[oPos-1],calcArray[oPos+1]); // math hours
        calcArray.splice(oPos-1, 3, result); // replace operator and numbers with result
    }
    // look for for and execute every multiplication
    const isSub = (element) => element == "-"; // allows us to see if current == x
    while (calcArray.includes("-")){ // execute multiplication first
        let oPos = calcArray.findIndex(isSub); // find first "x" in array
        let result = sub(calcArray[oPos-1],calcArray[oPos+1]); // math hours
        calcArray.splice(oPos-1, 3, result); // replace operator and numbers with result
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
