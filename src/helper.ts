import { InputClass } from '../types';

 /**
 * This function returns the corresponding category or class
 * of a given input number
 * @param input - the value
 * @returns the corresponding category/class
 */
export function getInputValue(input: number): InputClass {
  if (Number.isNaN(input)) {
    throw new TypeError('Invalid number');
  }

  if (input <= 0.2) {
    return InputClass.D;
  }

  if (input <= 1) {
    return InputClass.PC;
  }

  return InputClass.C;
}
