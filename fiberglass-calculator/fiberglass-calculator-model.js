export function getFormData(calculateForm) {
  let heightTankElement = calculateForm.querySelector('#height-tank');
  let lengthTankElement = calculateForm.querySelector('#length-tank');
  let heightFiberElement = calculateForm.querySelector('#height-fiber');
  let widthFiberElement = calculateForm.querySelector('#width-fiber');
  let widthAirChamberElement = calculateForm.querySelector('#width-air-chamber');

  return { heightTankElement, lengthTankElement, heightFiberElement, widthFiberElement, widthAirChamberElement};
}

export function getCircumference(height) {
  return Math.ceil(height * Math.PI);
}

export function getVolume(height, length) {
  const volume = Math.PI * Math.pow(((height / 100) / 2), 2) * (length / 100);
  const fixedVolume = !Number.isInteger(volume)
  ? parseFloat(volume.toFixed(2)) 
  : volume

  return fixedVolume;
}

export function getFiberPieces(circumference, lengthTank, heightFiber, widthFiber) {
  let piecesTour = circumference / (heightFiber - 5);
  let numTours = lengthTank / (widthFiber - 5);
  let piecesToSubstract = 0;

  if ((piecesTour - Math.floor(piecesTour)) *10 != 0 && (piecesTour - Math.floor(piecesTour)) *10 < 4) {
    piecesToSubstract += getPiecesToSubstract(numTours);
  }

  if ((numTours - Math.floor(numTours)) * 10 != 0 && (numTours - Math.floor(numTours)) * 10 < 4) {
    piecesToSubstract += getPiecesToSubstract(piecesTour);
  }
  
  piecesTour = Math.ceil(piecesTour);
  numTours = Math.ceil(numTours);

  return piecesTour * numTours - piecesToSubstract;
}

export function getAirChamberPieces(circumference, lengthTank, widthAirChamber) {
  let defaultPieces = 3;
  let piecesToSubstract = 0;
  let heightAirChamberPiece = Math.ceil(circumference / defaultPieces);
  while (heightAirChamberPiece > 150) {
    defaultPieces++;
    heightAirChamberPiece = Math.ceil(circumference / defaultPieces);
  }
  
  let numTours = lengthTank / widthAirChamber;
  if ((numTours - Math.floor(numTours)) * 10 != 0 && (numTours - Math.floor(numTours)) * 10 < 4) {
    piecesToSubstract += getPiecesToSubstract(defaultPieces);
  }
  
  numTours = Math.ceil(numTours);

  const totalAirChamber = defaultPieces * numTours - piecesToSubstract;

  return {pieces: totalAirChamber, height: heightAirChamberPiece}
}

function getPiecesToSubstract(number) {
  return Math.floor(number / 2)
}