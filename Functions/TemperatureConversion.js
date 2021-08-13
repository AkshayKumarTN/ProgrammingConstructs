var prompt = require('prompt-sync')();
console.log("\nOptions\n1-Fahrenheit To Celsius \n2-Celsius To Fahrenheit\n");
var options= parseInt(prompt("Enter the Option : "));
  switch (options)
  {
    case 1:
    {
      let input1 = prompt("Enter the Fahrenheit Value : ");
      result1= FahrenheitToCelsius(input1);
      if (result1 >= 0 && result1 <= 100) 
      {
        console.log("Celusis Value is " + result1+ "C and its between the freezing and boiling point ");
      } 
      else 
      {
        console.log("Not Between the freezing and boiling point !");
      }
    }
      break;
    case 2:
    {
      let input2 = prompt("Enter the Celsius Value : ");
      result2 = CelsiusToFahrenheit(input2);
      if (result2>= 32 && result2 <= 212) 
      {
        console.log("Fahrenheit Value is " + result2 + "F and its between the freezing and boiling point ");
      } 
      else 
      {
        console.log("Not Between the freezing and boiling point !");
      }
    }
      break;
      default:
          console.log("Invalid option");
          break;
  }

  function FahrenheitToCelsius(fahrenheit) 
{
  return ((fahrenheit - 32) * 5) / 9;

}
function CelsiusToFahrenheit(celsius)
{
  return (celsius * 9) / 5 + 32;
}