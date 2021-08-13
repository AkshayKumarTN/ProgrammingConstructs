var prompt = require("prompt-sync")();

console.log("Think of a Number in Range 1 - 100\n");
let start=0,end=100;
let found = 0;
while (start != end && found != 1)
{
    let midNumber = Math.round((end+start) / 2);
    console.log("Option:\n1-Is your Number "+midNumber+"?\n2-Is your Number less than "+midNumber+"?\n3-Is your Number Greater than "+midNumber+"?");
    let option = parseInt(prompt("Enter Option : "));
         switch(option)
         {
             case 1:
                console.log(" Guessed Number is " + midNumber);
                 found = 1;
                 break;
             case 2:
                 end = midNumber - 1;
                 break;
             case 3:
                 start= midNumber + 1;
                 break;
             default:
                console.log("Invalid option!!");
                 break;
        }
}
if(start==end)
{
    console.log("Guessing Number is : "+end);
}
