/**
 * Double Char
 * https://www.codewars.com/kata/56b1f01c247c01db92000076/train/typescript
 *
 */

export function doubleChar(str: string): string {
  return str.replace(/./g, '$&$&')
}
