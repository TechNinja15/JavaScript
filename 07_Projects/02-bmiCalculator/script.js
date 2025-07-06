const weight = document.getElementById("weight");
const height = document.getElementById("height");
const output = document.getElementById("output");

function calculateBMI() {
    const weightValue = (weight.value);
    const heightValue = (height.value) / 100; // Convert cm to m
    const bmi = weightValue / (heightValue * heightValue);
    output.textContent = `${bmi.toFixed(2)}`;
}

document.getElementById("calculate").addEventListener("click", calculateBMI);