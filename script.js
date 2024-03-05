calculatorNumberButtons = document.querySelectorAll(".number-button");
addButton = document.getElementById("addi");
subButton = document.getElementById("subt");
divButton = document.getElementById("divi");
mulButton = document.getElementById("mult");
equalButton = document.getElementById("equal");
deciButton = document.getElementById("decimal");

let firstNumber = 0;
let secondNumber = 0;
let operator = "";

//Add first number
function calcScreen(e) {
  const outputElement = document.getElementById("calc-output").textContent;
  if (
    outputElement === "0" ||
    outputElement === "+" ||
    outputElement === "-" ||
    outputElement === "*" ||
    outputElement === "/"
  ) {
    document.getElementById("calc-output").textContent = e.target.textContent;
  } else {
    document.getElementById("calc-output").textContent += e.target.textContent;
  }
}

function addFunction(first) {
  document.getElementById("calc-output").textContent;
  console.log(first + 5);
}
function subFunction(first) {}
function mulFunction(first) {}
function divFunction(first) {}

// Event listeners

calculatorNumberButtons.forEach((button) => {
  button.addEventListener("click", calcScreen);
});

document.getElementById("delete-button").addEventListener("click", (e) => {
  const outputElement = document.getElementById("calc-output");
  let textContent = outputElement.textContent;

  // Remove the last character
  textContent = textContent.substring(0, textContent.length - 1);

  // Check if textContent is empty or nullish, then default to "0"
  if (!textContent) {
    textContent = "0";
  }

  // Update the calc-output element's textContent
  outputElement.textContent = textContent;
});

document.getElementById("reset-button").addEventListener("click", (e) => {
  document.getElementById("calc-output").textContent = "0";
});

addButton.addEventListener("click", function () {
  firstNumber = Number(document.getElementById("calc-output").textContent);
  operator = "+";
  document.getElementById("calc-output").textContent = operator;
});

subButton.addEventListener("click", function () {
  firstNumber = Number(document.getElementById("calc-output").textContent);
  operator = "-";
  document.getElementById("calc-output").textContent = operator;
});
divButton.addEventListener("click", function () {
  firstNumber = Number(document.getElementById("calc-output").textContent);
  operator = "/";
  document.getElementById("calc-output").textContent = operator;
});
mulButton.addEventListener("click", function () {
  firstNumber = Number(document.getElementById("calc-output").textContent);
  operator = "*";
  document.getElementById("calc-output").textContent = operator;
});

equalButton.addEventListener("click", function () {
  if (operator != "") {
    secondNumber = Number(document.getElementById("calc-output").textContent);
    let result;
    if (operator == "+") {
      result = firstNumber + secondNumber;
    } else if (operator == "-") {
      result = firstNumber - secondNumber;
    } else if (operator == "/") {
      result = firstNumber / secondNumber;
    } else if (operator == "*") {
      result = firstNumber * secondNumber;
    }
    document.getElementById("calc-output").textContent = String(result);
  }
});

deciButton.addEventListener("click", function () {
  if (document.getElementById("calc-output").textContent.indexOf(".") == -1) {
    document.getElementById("calc-output").textContent += ".";
  }
});
