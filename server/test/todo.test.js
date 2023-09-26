// Test example (Need to be modified)
// Run: npm test

const calculator = require('../models/calculator.js');

test('sum 2 + 2 to equal 4', () => {
  const result = calculator.sum(2, 2);
  expect(result).toBe(4);
});

test('sum 5 + 100 to equal 105', () => {
  const result = calculator.sum(5, 100);
  expect(result).toBe(105);
});

test("sum 'banana' + 100 to equal 'Erro'", () => {
  const result = calculator.sum('banana', 100);
  expect(result).toBe('Error');
});
