var prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter a Number : "));
let i=1;
while(i<=number && Math.pow(2,i) <256)
{
    console.log("2 ^ "+ i + " = "+ Math.pow(2,i));
    i++;
}