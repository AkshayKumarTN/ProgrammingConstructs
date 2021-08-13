var prompt = require("prompt-sync")();
var number = parseInt(prompt("Enter a Positive Number : "));
let isPrime = true;
if (number === 1)
{
    console.log("1 is Neither Prime Nor Composite Number.");
}
else if (number > 1)
 {
    for (let i = 2; i < number; i++)
    {
        if (number % i == 0)
         {
            isPrime = false;
            break;
        }
    }
    if (isPrime)
    {
        console.log(number+" is a Prime Number");
    } 
    else 
    {
        console.log(number +" is a not Prime Number");
    }
}
else
{
    console.log("Invalid Number");
}