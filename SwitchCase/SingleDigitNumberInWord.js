var prompt = require('prompt-sync')();
var number = parseInt(prompt('Enter a Single Digit Number : '));
switch(number)
{
case 0:
    console.log("The number is : Zero");
    break;
case 1:
    console.log("The number is : One");
    break;
case 2:
    console.log("The number is : Two");
    break;
case 3:
    console.log("The number is : Three");
    break;
case 4:
    console.log("The number is : Four");
    break;
case 5:
    console.log("The number is : Five");
    break;
case 6:
    console.log("The number is : Six");
    break;
case 7:
    console.log("The number is : Seven");
    break;
case 8:
    console.log("The number is :Eight");
    break;
case 9:
    console.log("The number is : Nine");
    break;
default :
    console.log("Invalid number");
    break;
}