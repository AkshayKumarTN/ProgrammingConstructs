var prompt = require("prompt-sync")();
var number = parseInt(prompt("Enter a Number : "));
let factorial = 1;
 if (number==0 || number ==1)
{
    console.log("The factorial is "+number);
}
else
{
    for(let i = 1;i<=number;i++)
    {
       factorial=factorial*i;
    }
    console.log("The factorial of "+number+" is "+factorial);
}