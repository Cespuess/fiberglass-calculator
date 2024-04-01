import { fiberglassCalculate } from "./fiberglass-calculator/fiberglass-calculator-controller.js";

document.addEventListener('DOMContentLoaded', () => {
  const calculateForm = document.querySelector('#form-calculate');
  const outputData = document.querySelector('.output-data');

  fiberglassCalculate(calculateForm);
})

window.addEventListener('offline', () => {
  alert('Has perdido la conexión');
  })