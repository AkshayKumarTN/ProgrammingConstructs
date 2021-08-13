var randomVal=Math.floor(Math.random()*1000);
console.log("Random value 1 : " +randomVal);
let min_val=randomVal;
let max_val=randomVal;
for(var i=2;i<=5;i++)
{
var randomVal=Math.floor(Math.random()*1000);
console.log("Random value "+i+" : " +randomVal);
if(randomVal<min_val)
{
    min_val=randomVal;
}
else if(randomVal>max_val)
{
   max_val=randomVal;
}
}
console.log("Minimum value : " +min_val);
console.log("Maximum value : " +max_val);