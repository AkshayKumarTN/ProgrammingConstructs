var prompt = require('prompt-sync')();
const year = prompt('Enter a Year : ');
if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
{
    console.log(year+" is a Leap Year");
}
else
{
    console.log(year+" is not a Leap Year");
}