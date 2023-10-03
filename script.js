document.addEventListener("DOMContentLoaded", function () {
  const operationSelect = document.getElementById("operation");
  const fibonacciInput = document.getElementById("fibonacci-input");
  const volumeInput = document.getElementById("volume-input");
  const calculateButton = document.getElementById("calculate");
  const resultDiv = document.getElementById("result");
  const identitas = document.querySelector(".identitas");

  fibonacciInput.style.display = "none";
  volumeInput.style.display = "none";
  calculateButton.style.display = "none";
  resultDiv.style.display = "none";

  operationSelect.addEventListener("change", function () {
    if (operationSelect.value === "fibonacci") {
      fibonacciInput.style.display = "block";
      volumeInput.style.display = "none";
      calculateButton.style.display = "block";
      identitas.style.display = "none";
    } else if (operationSelect.value === "volume") {
      fibonacciInput.style.display = "none";
      volumeInput.style.display = "block";
      calculateButton.style.display = "block";
      identitas.style.display = "none";
    }
  });

  calculateButton.addEventListener("click", function () {
    const selectedOperation = operationSelect.value;

    if (selectedOperation === "fibonacci") {
      const n = parseInt(document.getElementById("fibonacci-term").value);
      const result = calculateFibonacci(n);
      resultDiv.innerText = `Hasil Deret Fibonacci ke-${n}: ${result}`;
    } else if (selectedOperation === "volume") {
      const shape = document.getElementById("shape").value;
      const dimension = parseFloat(document.getElementById("dimension").value);
      const result = calculateVolume(shape, dimension);
      resultDiv.innerText = `Volume ${shape}: ${result}`;
    }
  });

  function calculateFibonacci(n) {
    if (n <= 1) {
      return n;
    }
    let a = 0,
      b = 1;
    for (let i = 2; i <= n; i++) {
      const temp = a + b;
      a = b;
      b = temp;
    }
    return b;
  }

  function calculateVolume(shape, dimension) {
    if (shape === "cube") {
      return Math.pow(dimension, 3);
    } else if (shape === "sphere") {
      return (4 / 3) * Math.PI * Math.pow(dimension, 3);
    }
  }
});
