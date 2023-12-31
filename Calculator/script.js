function appendToDisplay(value) {
  document.getElementById("display").value += value;
}

function calculateResult() {
  var result = eval(document.getElementById("display").value);
  document.getElementById("display").value = result;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function backspace() {
  var displayValue = document.getElementById("display").value;
  document.getElementById("display").value = displayValue.slice(0, -1);
}
