// Get the input fields
const celsiusInput = document.getElementById("input1");
const fahrenheitInput = document.getElementById("input2");

// Add event listeners to the input fields to listen for changes
celsiusInput.addEventListener("input", convertTemperature);
fahrenheitInput.addEventListener("input", convertTemperature);

function convertTemperature() {
  // Get the value of the input field that was changed
  const inputValue = this.value;

  // Check if input is empty
  if (inputValue === "") {
    alert("Please enter a value.");
    return;
  }

  // Check if input is a number
  if (isNaN(inputValue)) {
    alert("Please enter a valid number.");
    this.value = "";
    return;
  }

  // Check if the value is in Celsius or Fahrenheit
  if (this === celsiusInput) {
    // Convert Celsius to Fahrenheit
    const fahrenheit = (inputValue * 9) / 5 + 32;
    // Update the Fahrenheit input field with the converted value
    fahrenheitInput.value = `${fahrenheit}   °F`;
  } else {
    // Convert Fahrenheit to Celsius
    const celsius = ((inputValue - 32) * 5) / 9;
    // Update the Celsius input field with the converted value
    celsiusInput.value = `${Math.round(celsius)}  °C`;
  }
}
celsiusInput.value = "";
fahrenheitInput.value = "";
