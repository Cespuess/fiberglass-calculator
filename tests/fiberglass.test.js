import { getAirChamberPieces, getCircumference, getFiberPieces, getVolume } from "../fiberglass-calculator/fiberglass-calculator-model.js";

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
}),

test('calculate air chamber pieces', () => {
  expect(getAirChamberPieces(575, 263, 65)).toEqual({pieces: 18, height: 144});
  expect(getAirChamberPieces(472, 165, 80)).toEqual({pieces: 10, height: 118});
  expect(getAirChamberPieces(765, 420, 50)).toEqual({pieces: 54, height: 128});
})