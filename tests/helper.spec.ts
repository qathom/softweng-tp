import { getInputValue } from '../src/helper';
import { InputClass } from '../types';

// Scoped test
describe('Matching categories for our helper function', () => {
  // Testing values provided in the course slide
  const inputValues = [
    { value: 1, expected: InputClass.PC },
    { value: .2, expected: InputClass.D },
    { value: .7, expected: InputClass.PC },
    { value: 4, expected: InputClass.C },
    { value: 2, expected: InputClass.C },
    { value: .5, expected: InputClass.PC },
  ];

  inputValues.forEach(({ value, expected }) => {
    test(`Using provided value: ${value}`, () => {
      expect(getInputValue(value)).toBe(expected);
    });
  })

  test('Using types', () => {
    expect(typeof 2).toBe('number');
    const err: () => string = () => getInputValue(NaN);
    expect(err).toThrow(TypeError);
  });
});
