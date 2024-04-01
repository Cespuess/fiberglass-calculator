export function renderData(data){
  return `
  <ul> 
    <li>El depósito tiene un volumen de <span>${data.volume} m3</span> </li>
    <li>Se necesitarán <span>${data.fiberPieces}</span> piezas de fibra y <span>${data.airChamberPieces.pieces}</span> piezas de doble cámara de <span>${data.airChamberPieces.height}</span> centímetros de altura. </li>
  </ul>`
}