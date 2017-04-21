var input = document.getElementById('number');
var fahRadio = document.getElementById('fah');
var celRadio = document.getElementById('cel');
var outputDiv = document.getElementById('output');
var clear = document.getElementById('clear');
var button = document.getElementById("submit");

function toCelsius (num) {
  var output= (num-32)/1.8;
  return output;
}

function toFahrenheit (num) {
  var output = num * 1.8 +32;
  return output;
}

// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.
function color (temp, hot, cold) {
  if (temp >= hot) {
    outputDiv.style.color = 'red';
  } else if (temp <= cold) {
    outputDiv.style.color = 'blue';
  } else {
    outputDiv.style.color = 'green';
  }
}

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  var outputNum;
  if (fahRadio.checked) {
    outputNum = toFahrenheit(input.value);
    color(outputNum, 90, 32);
  } else if (celRadio.checked) {
    outputNum = toCelsius(input.value);
    color(outputNum, 32, 0);
  }
  outputDiv.innerHTML = outputNum;
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

// Create another button that, when clicked, clears any text in the input field.
clear.addEventListener('click', function () {
  fahRadio.checked = false;
  celRadio.checked = false;
  input.value = '';
})

// Add an event handler to the input field that checks
// if the user pressed the enter key, and if that happens, perform the conversion.
input.addEventListener('keypress', function (event) {
  if (event.which === 13) {
    determineConverter(event);
  }
})
