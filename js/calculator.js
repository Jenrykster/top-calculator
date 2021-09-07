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

function onButtonClick(e){
    console.log(e.target);
}