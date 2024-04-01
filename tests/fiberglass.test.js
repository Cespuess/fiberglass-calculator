import { getCircumference, getFiberPieces, getVolume } from "../fiberglass-calculator/fiberglass-calculator-model.js";

test('calculate circumference', () => {
  expect(getCircumference(183)).toBe(575);
  expect(getCircumference(150)).toBe(472);
  expect(getCircumference(244)).toBe(767);
}),

test('calculate volume', () => {
  expect(getVolume(183, 263)).toBe(6.92);
  expect(getVolume(150, 165)).toBe(2.92);
  expect(getVolume(244, 420)).toBe(19.64);
}),

test('calculate fiber pieces', () => {
  expect(getFiberPieces(575, 263, 120, 75)).toBe(20);
  expect(getFiberPieces(472, 165, 140, 60)).toBe(12);
  expect(getFiberPieces(767, 420, 100, 95)).toBe(43);
})