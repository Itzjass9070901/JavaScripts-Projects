
let firstNum = ' ';
let secondNum = ' ';
let operator = ' ';
// let newNum = '';
//getElementById to get the value from display box
let display = document.getElementById("display");

//function to capture function

function addNumber(num){

    if(operator ===' ')
    {
        firstNum +=num;
        display.value=firstNum;
        console.log(firstNum);
    }
    else{
        secondNum +=num;
        display.value=secondNum;
        console.log(secondNum);
    }
}

// function to capture operator

function addOperator(op)
{
    firstNum=display.value;
    console.log(firstNum);
    operator=op;
    console.log(operator);
}

// function to perfomr calculations
function calculate()
{
    let result=0;
    let num1= Number(firstNum);
    console.log(num1);
    let num2= Number(secondNum);
    console.log(num2);

    //  check not a number

    if (isNaN(num1) || isNaN(num2))
    {
        display.value="Error";
        return;
    }

    if(operator ==='+'){
        result = num1+num2;
    } else if(operator === '-')
    {
        result = num1-num2;
    }    else if(operator === '*')
    {
        result = num1*num2;
    }    else if(operator === '/')
    {
        result = num2 !==0 ? num1/num2: 'Error';
    }
    else{
        return;
    }
    
    //update the display area with tehr results value
    display.value=result;
    console.log(result);
    firstNum='';
    secondNum='';
    operator='';
}













//function to clear the display area with blank spaces
function clearDisplay()
{
    document.getElementById('display').value='';
    firstNum='';
    secondNum='';
    operator='';
}