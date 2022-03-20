const display1E1 = document.querySelector('.display-1');
const display2E1 = document.querySelector('.display-2');
const displaytemp = document.querySelector('.temp-display');
const numbersE1 = document.querySelectorAll('.num');
const operationE1 = document.querySelectorAll('.operation');
const operationEL = document.querySelector('.operation_equal');
const lastclear = document.querySelector('.last-clear');
const clearE1 = document.querySelector('.all-clear');


let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperator = '';
let haveDot = false;

numbersE1.forEach( num =>{
    num.addEventListener('click', (e) =>{
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){
            return;
        }
        dis2Num += e.target.innerText;
        display2E1.innerText=dis2Num;

    })
});

operationE1.forEach(operation =>{
    operation.addEventListener('click',(e) =>{
        if(!dis2Num) result;
        haveDot = false;
        const operationName = e.target.innerText;
        if(dis1Num && dis2Num && lastOperator){
            mathOperation();
        }else{
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperator = operationName;
        console.log(result);
    })
});

function clearVar(name = ''){
    dis1Num += dis2Num + ' ' + name + '';
    display1E1.innerText = dis1Num;
    display2E1.innerText = '';
    dis2Num = '';
    displaytemp.innerText = result;
}

function mathOperation(){
    if(lastOperator === 'X'){
        result = parseFloat(result) * parseFloat(dis2Num);
    }else if(lastOperator === '+'){
        result = parseFloat(result) + parseFloat(dis2Num);
    }else if(lastOperator === '-'){
        result = parseFloat(result) - parseFloat(dis2Num);
    }else if(lastOperator === '/'){
        result = parseFloat(result) / parseFloat(dis2Num);
    }else if(lastOperator === '%'){
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}

operationEL.addEventListener('click', (e) => {
    if (!dis2Num || !dis1Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2E1.innerText = result;
    displaytemp.innerText = "";
    dis2Num = result;
    dis1Num = "";
});

clearE1.addEventListener('click' ,(e) =>{
    display1E1.innerText = '0';
    display2E1.innerText = '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
    displaytemp.innerText = '0';
});

lastclear.addEventListener('click', (e) =>{
    display2E1.innerText = '0';
    dis2Num = '';
})
window.addEventListener("keydown", (e) => {
    if (
        e.key === "0" ||
        e.key === "1" ||
        e.key === "2" ||
        e.key === "3" ||
        e.key === "4" ||
        e.key === "5" ||
        e.key === "6" ||
        e.key === "7" ||
        e.key === "8" ||
        e.key === "9" ||
        e.key === "."
    ){
        clickButtonEl(e.key);
    }else if (e.key === "+" || e.key === "-" || e.key === "/" || e.key === "%") {
        clickOperation(e.key);
    }else if (e.key === "*") {
        clickOperation("x");
    }else if (e.key == "Enter" || e.key === "=") {
        clickEqual();
    }
});
function clickButtonEl(key){
    numbersE1.forEach((button) => {
        if (button.innerText === key) {
        button.click();
        }
    });
}
function clickOperation(key){
    operationE1.forEach((operation) => {
        if (operation.innerText === key) {
        operation.click();
        }
    });
}
function clickEqual() {
    equalEl.click();
}
