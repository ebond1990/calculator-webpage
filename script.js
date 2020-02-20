function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(operator,a,b){
    a = Number(a);
    b = Number(b);
    switch(operator){
        case "add":
            return add(a,b);
            break;
        case "subtract":
            return subtract(a,b);
            break;
        case "multiply":
            return multiply(a,b);
            break;
        case "divide":
            return divide(a,b);
            break;
        default:
            break;
    }
}

function buttonAction(clickEvent){
    let action = clickEvent.target.id;
    
    if(isNaN(action)){
        switch(action){
            case 'clear':
                display.value = 0;
                operation = '';
                opA = '';
                opB = '';
                break;
            case 'decimal': 
                if (display.value.search(/\./) == -1){
                    printNumber('.');
                }
                break;
            case 'sign':
                display.value = display.value * -1;
                break;
            case 'operate':
                opB = display.value;
                console.log(opA);
                console.log(operation);
                console.log(opB);
                console.log(operate(operation,opA,opB));
                display.value = operate(operation,opA,opB);
                opA = display.value;
                nextOperand = true;
                operation = '';
                break;
            default:
                
                opA = display.value;
                operation = action;
                nextOperand = true;
                
        }
    }else{
        printNumber(action);
    }
}

function printNumber(number){
    if(display.value !== '0' && nextOperand == false){
        display.value = display.value + number;
    } else {
        display.value = number;
        nextOperand = false;
    }
}

const buttons = Array.from(document.getElementsByClassName('number'));
const display = document.getElementById('display');
let operation = '';
let nextOperand = false;
let opA = '';
let opB = '';

display.value = 0;

buttons.forEach(button => {
    button.addEventListener('click', buttonAction)
});


