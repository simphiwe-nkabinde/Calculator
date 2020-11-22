//operation btn variables
const addBtn = document.getElementById('op-add');
const subtractBtn = document.getElementById('op-subtract');
const multiplyBtn = document.getElementById('op-multiply');
const divideBtn = document.getElementById('op-divide');
const dot = document.getElementById('fraction-dot');

//number btn variables
const num1 = document.getElementById('num-1');
const num2 = document.getElementById('num-2');
const num3 = document.getElementById('num-3');
const num4 = document.getElementById('num-4');
const num5 = document.getElementById('num-5');
const num6 = document.getElementById('num-6');
const num7 = document.getElementById('num-7');
const num8 = document.getElementById('num-8');
const num9 = document.getElementById('num-9');
const num0 = document.getElementById('num-0');

// eqaul and clear buttons
const equalBtn = document.getElementById('btn-equal');
const clearBtn = document.getElementById('btn-clear');


//display blocks

const dpBox1 = document.getElementById('display-block1');
const dpBox2 = document.getElementById('display-block2');
const dpBox3 = document.getElementById('display-block3');

//log panel
const logPanel = document.getElementById('log-text')
let logList = []; 




//displays entered values
function outputValue() {
    let value = event.target.value;
    
    if (dpBox2.textContent === '') {
        dpBox1.innerHTML = `${dpBox1.textContent}${value}`;
    }   else {
        dpBox3.innerHTML = `${dpBox3.textContent}${value}`;
    }
}

//displayes entered operation
function outputop() {
    let op = event.target.textContent;
    dpBox2.innerHTML = op;
}
//calculates results and displays resultd

function outputResult() {
    let valueBox1 = parseFloat(dpBox1.textContent);
    let valueBox3 = parseFloat(dpBox3.textContent);
    let opBox = dpBox2.textContent;
 
    if (opBox === '+') {
        result = valueBox1 + valueBox3;
    }
    else if (opBox === '-') {
        result = valueBox1 - valueBox3;
    }
    else if (opBox === 'x') {
        result = valueBox1 * valueBox3;
    }
    else { result = valueBox1 / valueBox3

    }

    const logEntry = {
        value1: valueBox1,
        operation: opBox,
        value2: valueBox3,
        result: result
    };
    
    //add new calculation to logList
    //print and number each log entry
    logList.push(logEntry);
    let lastIndex = logList.length - 1;
    let logIndex0 = logList[lastIndex];
    lastLogOutput = `${logIndex0.value1} ${logIndex0.operation} ${logIndex0.value2} = ${logIndex0.result}`;
    logPanel.innerHTML = `${logPanel.textContent} \n ${logList.length}: ${lastLogOutput}`;

    dpBox1.innerHTML = result;
    dpBox2.innerHTML = '';
    dpBox3.innerHTML = '';
}

//clears display
    function outputClear() {
        dpBox1.innerHTML = '';
        dpBox2.innerHTML = '';
        dpBox3.innerHTML = '';
}   



//event listeners for number buttons
num1.addEventListener('click', outputValue);
num2.addEventListener('click', outputValue);
num3.addEventListener('click', outputValue);
num4.addEventListener('click', outputValue);
num5.addEventListener('click', outputValue);
num6.addEventListener('click', outputValue);
num7.addEventListener('click', outputValue);
num8.addEventListener('click', outputValue);
num9.addEventListener('click', outputValue);
num0.addEventListener('click', outputValue);
dot.addEventListener('click', outputValue);

//event listeners for operation buttons
addBtn.addEventListener('click', outputop);
subtractBtn.addEventListener('click', outputop);
multiplyBtn.addEventListener('click', outputop);
divideBtn.addEventListener('click', outputop);

equalBtn.addEventListener('click', outputResult);
clearBtn.addEventListener('click', outputClear)
