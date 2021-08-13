var prompt = require('prompt-sync')();
let day = prompt("Enter Day : ");
let month = prompt("Enter the Month : ");
if((month==3 && day>20 ) || (month==4 && day<31) || (month==5 && day<32) || (month==6 && day<20))
{
    console.log("True");
}
else
{
    console.log("False");
}