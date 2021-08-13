var prompt = require('prompt-sync')();
var number = prompt('Enter a Number in the range (1,10,100,1000....) : ');
if(number == 1)
{
    console.log("The number is : One");
}
else if(number == 10)
{
    console.log("The number is : Ten");
}
else if(number == 100)
{
    console.log("The number is : Hundred");
}
else if(number == 1000)
{
    console.log("The number is : Thousand");
}
else if(number == 10000)
{
    console.log("The number is : Ten Thousand");
}
else if(number == 100000)
{
    console.log("The number is : Lakh");
}else if(number == 1000000)
{
    console.log("The number is : Ten Lakh");
}
else
{
    console.log("Invalid number");
}