var prompt = require('prompt-sync')();
var number1 = prompt('Enter Number 1 : ');
var number2 = prompt('Enter Number 2 : ');
var number3 = prompt('Enter Number 3 : ');
let result1 = (number1+number2)*number3;
let result2 = (number1%number2)+number3;
let result3 = number3+number1/number2;
let result4 = number1*number2+number3;
let max=result1;
let min=result1;
if(result1<result2 && result1<result3 && result1<result4)
{
    min=result1;
}
else if(result2<result1 && result2<result3 && result2<result4)
{
    min=result2;
}
else if(result3<result1 && result3<result2 && result3<result4)
{
    min=result3;
}
else
{
    min=result4;
}
if(result1>result3 && result1>result4 && result1>result2)
{
    max=result1;
}
else if(result2>result3 && result2>result4 && result2>result1)
{
    max=result2;
}
else if(result3>result1 && result3>result2 && result3>result4)
{
    max=result3;
}
else
{
    max=result4;
}

console.log("Result 1 value : " +result1);
console.log("Result 2 value : " +result2);
console.log("Result 3 value : " +result3);
console.log("Result 4 value : " +result4);
console.log("\nMinimum value : " +min);
console.log("Maximum value : " +max);