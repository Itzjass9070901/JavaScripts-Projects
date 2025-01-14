// Conversion factors from one unit to meters
const conversionFactors = {
    meters: 1,
    kilometers: 1000,
    centimeters: 0.01,
    feet: 0.3048,
    inches: 0.0254
}


function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const resultDiv = document.getElementById("result");

    
    if (isNaN(inputValue)) {
        resultDiv.innerHTML = "<p style='color: red;'>Please enter a valid number.</p>";
        return;
    }

   
    const valueInMeters = inputValue * conversionFactors[fromUnit];

    
    const convertedValue = valueInMeters / conversionFactors[toUnit];

    //  Display the result 
    resultDiv.innerHTML = `<p>${inputValue} ${fromUnit} = ${convertedValue.toFixed(4)} ${toUnit}</p>`;
}
