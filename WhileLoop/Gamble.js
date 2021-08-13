let lose=0;
let amount=100;
let betCount=0,winCount=0;

while(amount<200 && lose<amount)
{
    let bet=Math.floor(Math.random() * 2);
    if(bet==0)
    {
        amount++;
        winCount++;
    }
    else
    {
        amount--;
    }
    betCount++;
}
console.log("Number of Wins : "+winCount+"\nTotal Bets made : "+betCount);
if(amount==200)
{
    console.log("Gambler Wons");
}
else
{
    console.log("Gambler loss");
}