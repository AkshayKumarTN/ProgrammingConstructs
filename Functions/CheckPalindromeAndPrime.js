var prompt = require('prompt-sync')();
var number = prompt('Enter a Number: ');
var result1=ValidatePalindrome(number);
var result2=CheckPrime(parseInt(number));
if(result1&&result2)
{
    console.log(number+" is a Prime Number and a Palindrome");
}
else if (result2)
{
    console.log(number+" is a Prime Number and Not a Palindrome");
}
else if(result1)
{
    console.log(number+" is a Not Prime Number But its a Palindrome");
}


function ValidatePalindrome(string) {  
    const len = string.length;  
    for (let i = 0; i < len / 2; i++) {  
   
        if (string[i] !== string[len - 1 - i]) {  
            console.log(string+" is not a Palindrome");
            return false;
        }  
    } 
    console.log(string+" is a Palindrome");
    return true;
}  

function CheckPrime(number)
{
    let isPrime = true;
    if (number === 1)
    {
          console.log("1 is Neither Prime Nor Composite Number.");
          return false;
    }
    else if(number==2)
    {
        console.log(number+" is a Prime Number");
            return true;
    }
    else if (number > 2)
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
            return true;
        } 
        else 
        {
            console.log(number +" is a not Prime Number");
            return false;
        }
    } 
}