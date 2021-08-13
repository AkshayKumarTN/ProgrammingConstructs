var prompt = require('prompt-sync')();
var number = parseInt(prompt('Enter a Number in the range (1,10,100,1000....) : '));
switch(number)
{
case 1:
    console.log("The number is : One");
    break;
case 10:
    console.log("The number is : Ten");
    break;
case 100:
    console.log("The number is : Hundred");
    break;
case 1000:
    console.log("The number is : Thousand");
    break;
case 10000:
    console.log("The number is : Ten Thousand");
    break;
case 100000:
    console.log("The number is : Lakh");
    break;
case 1000000:
    console.log("The number is : Ten Lakh");
    break;
default:
    console.log("Invalid number");
}