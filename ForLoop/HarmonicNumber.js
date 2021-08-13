var prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a Number : "));
let sum=0;
for(var i=1;i<=number;i++)
{
    sum+=(1/i);
}
console.log("The "+number+"th harmonic number is: "+sum.toFixed(3));