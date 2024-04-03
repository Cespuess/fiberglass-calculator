import { getAirChamberPieces, getCircumference, getFiberPieces, getFormData, getVolume } from "./fiberglass-calculator-model.js";

export function fiberglassCalculate(calculateForm) {
  const { heightTankElement, lengthTankElement, heightFiberElement, widthFiberElement, widthAirChamberElement} = getFormData(calculateForm);

  const validations = validateForm(heightTankElement, lengthTankElement, heightFiberElement, widthFiberElement, widthAirChamberElement);

  if(validations) {
    const heightTank = parseFloat(heightTankElement.value);
    const lengthTank = parseFloat(lengthTankElement.value);
    const heightFiber = parseFloat(heightFiberElement.value);
    const widthFiber = parseFloat(widthFiberElement.value);
    const widthAirChamber = parseFloat(widthAirChamberElement.value);
  
    const circumference = getCircumference(heightTank);
    const volume = getVolume(heightTank, lengthTank);
    
    const fiberPieces = getFiberPieces(circumference, lengthTank, heightFiber, widthFiber);
    const airChamberPieces = getAirChamberPieces(circumference, lengthTank, widthAirChamber);
    
    return {volume, fiberPieces, airChamberPieces};
  }
  else return {};  
}

function validateForm(...param) {
  let res = true

  param.forEach(element => {
    if (element.value === '') {
      renderError(element, 'No puede haber un campo vacío.');
      res = false;
    }
    else if (element.value[0] === '0') {
      renderError(element, 'No puede ser 0.'); 
      res = false;   
    }
    else if (!validateRegex(element.value)) {
      renderError(element, 'Solo centímetros, máximo un decimal.');
      res = false;
    }
    else resetElement(element);
  });
  return res;
}

function validateRegex(value) {
  const regex = new RegExp('^[0-9]{0,12}([.][1-9]{1})?$');
  return regex.test(value);
}

function renderError(element, message) {
  element.classList.add('input-error');
  const parentInput = element.parentElement;
  const errorElement = parentInput.querySelector('.error');
  errorElement.innerHTML = message;
}

function resetElement(element) {
  element.classList.remove('input-error');
  const parentInput = element.parentElement;
  const errorElement = parentInput.querySelector('.error');
  errorElement.innerHTML = '';
}

// -----------comprobar input vacío
// -----------comprobar input 0
// -----------comprobar input regex
// -----------hacer función que imprima el error
// -----------hacer función que haga el borde rojo del input
// -----------borrar el mensaje de error
// -----------hacer que el form-element sea wrap  y que el error quede debajo
// mirar que devuelve para que en el index no se ejecute la función de imprimir el resultado
