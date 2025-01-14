// Create Temperature Conversion Web App. Write a script to convert temperature from Fahrenheit to Celsius and convert Celsius to Fahrenheit.

// Formulas To convert
// F To C
// c= (F-32) / 1.8

// C To F
// F = ( C * 1.8 ) + 32

// script.js
document.getElementById("convertButton").addEventListener("click", function() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const conversionType = document.getElementById("conversionType").value;
    const resultElement = document.getElementById("result");
  
    if (isNaN(temperature)) {
      resultElement.textContent = "Please enter a valid number.";
      return;
    }
  
    let result;
  
    if (conversionType === "c-to-f") {
      result = (temperature * 1.8) + 32;
      resultElement.textContent = `${temperature}°C is ${result.toFixed(2)}°F.`;
    } else if (conversionType === "f-to-c") {
      result = (temperature - 32) / 1.8;
      resultElement.textContent = `${temperature}°F is ${result.toFixed(2)}°C.`;
    }
  });
  