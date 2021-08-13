var prompt = require('prompt-sync')();
console.log("1.Feet To Inch conversion\n2.Inch To Feet Conversion\n3.Feet To Meter Conversion\n4.Meter To Feet Conversion");
let check=parseInt(prompt("Enter the option "));
switch(check)
{
    case 1: 
    {
    let feetToInch=prompt("Enter the feet Value : ");
    console.log("Feet To Inch : " +feetToInch*12);
    break;
    }
    case 2:
    {
    let inchToFeet=prompt("Enter the inch Value : ");
    console.log("Inch To Feet : " +inchToFeet/12);
    break;
    }
     case 3:
    {
    let feetToMeter=prompt("Enter the feet Value : ");
    console.log("Feet To Meters : " +feetToMeter*0.3048);
    break;
    }
      case 3:
    {
    let meterToFeet=prompt("Enter the meter Value : ");
    console.log("Meters To Feet : " +meterToFeet*3.28084);
    break;
    }
    default:
    {
        console.log(" Invalid option!!!");
        break;
    }
}