var prompt = require('prompt-sync')();
const string = prompt('Enter a Number: ');  
ValidatePalindrome(string);

function ValidatePalindrome(string) {  
    const len = string.length;  
    var flag=true;
    for (let i = 0; i < len / 2; i++) {  
   
        if (string[i] !== string[len - 1 - i]) {  
            console.log(string+" is not a Palindrome"); 
            flag=false; 
        }  
    }  
    if(flag==true)
    {
    console.log(string+" is a Palindrome");
    }
}  
