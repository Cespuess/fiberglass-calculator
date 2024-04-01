import { renderData } from "./outputDataView.js";

export function outputDataController(outputData, data) {
  outputData.innerHTML = renderData(data);
}