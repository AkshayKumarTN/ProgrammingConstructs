var prompt = require("prompt-sync")();
let start = parseInt(prompt("Enter Start of Range : "));
let end = parseInt(prompt("Enter End of Range : "));
console.log("The prime numbers between "+start+" and "+end+" are : ");

for (let i = start; i <= end; i++)
 {
    let flag = 0;
    for (let j = 2; j < i; j++)
     {
        if (i % j == 0) 
        {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) 
    {
        console.log(i+" is a Prime Number");
    }
}