import { fiberglassCalculate } from "./fiberglass-calculator/fiberglass-calculator-controller.js";
import { outputDataController } from "./output-data/outputDataController.js";

document.addEventListener('DOMContentLoaded', () => {
  const calculateForm = document.querySelector('#form-calculate');
  const outputData = document.querySelector('.data-output');

  calculateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = fiberglassCalculate(calculateForm);
    if (Object.keys(data).length !== 0) outputDataController(outputData, data);
  })
})

window.addEventListener('offline', () => {
  alert('Has perdido la conexión');
  })