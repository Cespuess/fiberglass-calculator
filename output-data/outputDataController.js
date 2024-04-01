import { renderData } from "./outputDataView.js";

export function outputDataController(outputData, data) {
  const answer = document.createElement('div');
  answer.innerHTML = renderData(data);
  outputData.appendChild(answer);
}