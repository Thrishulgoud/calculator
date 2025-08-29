let display = document.getElementById("display");

// Append character to display
function appendChar(char) {
  display.value += char;
}

// Clear all input
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteChar() {
  display.value = display.value.slice(0, -1);
}

// Perform calculation
function calculate() {
  try {
    display.value = eval(display.value); // using eval for simplicity
  } catch (e) {
    display.value = "Error";
  }
}
