let tResult = 0;
let opOptions = ['divide', 'multiply', 'subtract', 'add'];
let runOperation = "";

function updateDisplay(input) {
  let display = document.getElementById("display");
  let secondaryDisplay = document.getElementById("secondaryDisplay");

  if (display.innerHTML === "0" && opOptions.indexOf(input) === -1) {
    if (input === "decimal") {
      display.innerHTML = "0.";
    } else if (input === "negative-value") {
      if (display.innerHTML.indexOf("-1") === -1) {
        display.innerHTML = "-" + display.innerHTML
      } else if (display.innerHTML.indexOf("-1" > -1)) {
        display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
      }
    } else {
      display.innerHTML = input;
    }
  } else if (opOptions.indexOf(input) >= 0) {
    if (tResult === display.innerHTML) {
      runOperation = input;
    } else if (runOperation === "") {
      runOperation = input;
      tResult = display.innerHTML;
      secondaryDisplay.innerHTML = tResult;
      display.innerHTML = 0;
    } else {
       tResult = calculate(tResult, display.innerHTML, runOperation);
      secondaryDisplay.innerHTML = tResult;
      display.innerHTML = 0;
      runOperation = input;
    }
  } else if (input === "equals") {
    display.innerHTML = calculate(tResult, display.innerHTML, runOperation);
    tResult = 0;
    runOperation = "";
    secondaryDisplay.innerHTML = tResult;
  } else if (input === "decimal") {
    if (display.innerHTML.indexOf(".") === -1) {
      display.innerHTML += ".";
    }
    } else if (input === "negative-value") {
    if (display.innerHTML.indexOf("-1") === -1) {
      display.innerHTML = "-" + display.innerHTML
    } else if (display.innerHTML.indexOf("-1" > -1)) {
      display.innerHTML = display.innerHTML.slice(1, display.innerHTML.length);
    }
  } else {
    display.innerHTML += input;
  }
  }

function clearDisplay() {
  let display = document.getElementById("display");
  let secondaryDisplay = document.getElementById("secondaryDisplay");
  tResult = 0;
  display.innerHTML = 0;
  secondaryDisplay.innerHTML = tResult;
}

function calculate(firstNumber, secondNumber, operation) {
  let result;
  firstNumber = parseFloat(firstNumber);
  secondNumber = parseFloat(secondNumber);
  switch(operation) {
    case "add":
      result = firstNumber + secondNumber;
      break;
    case "subtract":
      result = firstNumber - secondNumber;
      break;
    case "multiply":
      result = firstNumber * secondNumber;
      break;
    case "divide":
      result = firstNumber / secondNumber;
      break;
    default:
      console.log("Calculate switch statement missed something");
  }
  return result.toString();
}