import { getAirChamberPieces, getCircumference, getFiberPieces, getFormData, getVolume } from "./fiberglass-calculator-model.js";

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
    const airChamberPieces = getAirChamberPieces(circumference, lengthTank, widthAirChamber);
    
  })
}


