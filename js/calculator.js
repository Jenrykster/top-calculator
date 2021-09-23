function add(n1, n2){
    return n1 + n2;
}
function subtract(n1, n2){
    return n1 - n2;
}
function multiply(n1,n2){
    return n1 * n2;
}
function divide(n1, n2){
    if(n2 == 0 ) return "ERR0R/0/0"
    return n1 / n2;
}
function operate(operation, n1, n2){
    return operation(n1,n2);
}

const buttons = document.querySelectorAll('.calc-button');
buttons.forEach((button)=>{
    button.addEventListener('click', onButtonClick)
})

const display = document.querySelector('#display h3');

let n1 = 0;
let n2 = 0;
let operation; 
let lastResult;
function onButtonClick(e){
    if(e.target.innerHTML == '=' && display.innerHTML == lastResult){
        return;
    }
    if(e.target.classList.contains('symbol')){
        if(n1 == 0){
            n1 = parseInt(display.innerHTML);
            display.innerHTML = '0';
        }else if(n2 == 0 || n1 == lastResult){
            n2 = parseInt(display.innerHTML);
            display.innerHTML = '0';
        }   
        switch (e.target.innerHTML){
            case '=':
                console.log("N1:", n1, "\nN2:", n2,"\nLast Result:", lastResult);
                lastResult = operate(operation, n1, n2);
                if(lastResult.toString().length > 12) lastResult = lastResult.toFixed(4);
                display.innerHTML = lastResult;
                n1 = lastResult;
                break
            case '+':
                operation = add;
                break;
            case '/':
                operation = divide;
                break;
            case '-':
                operation = subtract;
                break;
            case 'X':
                operation = multiply;
                break;  
            case 'AC':
                n1 = 0;
                n2 = 0;
                lastResult = 0;  
        }
        
    }
    else{
        display.innerHTML == 0 ? display.innerHTML = e.target.innerHTML : display.innerHTML += e.target.innerHTML;
    }
    if(display.innerHTML.includes("OVERLOAD") ||display.innerHTML.includes("undefined")  || e.target.id == "clear"){
        n1, n2 = 0, 0;
        display.innerHTML = '0';
    }
    if(display.innerHTML.length >= 14){
        display.innerHTML = "OVERLOAD";
    }
    
}