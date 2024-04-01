import { getCircumference, getFiberPieces, getFormData, getVolume } from "./fiberglass-calculator-model.js";

export function fiberglassCalculate(calculateForm) {

  calculateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const { heightTankElement, lengthTankElement, heightFiberElement, widthFiberElement, widthAirChamberElement} = getFormData(calculateForm);
    
    const heightTank = parseFloat(heightTankElement.value);
    const lengthTank = parseFloat(lengthTankElement.value);
    const heightFiber = parseFloat(heightFiberElement.value);
    const widthFiber = parseFloat(widthFiberElement.value);
    const widthAirChamber = parseFloat(widthAirChamberElement.value);

    const circumference = getCircumference(heightTank);
    const volume = getVolume(heightTank, lengthTank);
    
    const fiberPieces = getFiberPieces(circumference, lengthTank, heightFiber, widthFiber);
    
  })
}


// ----- recibir datos del formulario
// ----  sacar circunferéncia   
// ------- sacar volumen     2 decimales 

// FIBRA
// sacar piezas vuelta
// sacar num vueltas
// parte decimal
// sacar las piezas a restar

// DOBLE
// sacar piezas vuelta y medida
// sacar num vueltas
// parte decimal
// sacar piezas a restar