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

function onButtonClick(e){
    if(display.innerHTML == '0'){
        display.innerHTML = e.target.innerHTML; 
    }else{
        display.innerHTML += e.target.innerHTML;
    }
    if(display.innerHTML.includes("OVERLOAD")){
        display.innerHTML = '0';
    }
    if(display.innerHTML.length >= 14){
        display.innerHTML = "OVERLOAD";
    }
    if(e.target.id == "clear"){
        display.innerHTML = '0';
    }
}