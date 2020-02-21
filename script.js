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
                a = undefined;
                b = undefined;
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
                if (operatorEntered){
                    b = display.value;
                }
                if(a){
                    console.log(a,b);
                    console.log(operation);
                    display.value = operate(operation, a, b);
                    a = display.value;
                }
                
                nextOperand = true;
                operatorEntered = false;
                //operation = '';
                break;
            default:
                console.log(a, operatorEntered, action);
                if(a && operatorEntered){
                    b = display.value;
                    display.value = operate(operation, a, b);
                    console.log("operated");
                }
                a = display.value;
                operatorEntered = true;
                nextOperand = true;
                operation = action;
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
let operatorEntered = false;
let a = undefined;
let b = undefined;

display.value = 0;

buttons.forEach(button => {
    button.addEventListener('click', buttonAction)
});


