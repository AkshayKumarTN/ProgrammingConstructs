var prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a Number : "));
for(let i=1;i<=number;i++)
{
    console.log("2 ^ "+ i + " = "+ Math.pow(2,i));
}