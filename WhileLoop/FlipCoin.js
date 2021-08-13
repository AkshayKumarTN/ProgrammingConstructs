var headCount=0;
var tailCount=0;
while(headCount<=10 || tailCount<=10)
{
    let coinVal=Math.floor(Math.random() * 2);
    if(coinVal==0)
    {
        headCount++;
    }
    else
    {
        tailCount++;
    }
}
if(headCount==11)
{
    console.log("Head Wins");
}
else
{
    console.log("Tail Wins");
}