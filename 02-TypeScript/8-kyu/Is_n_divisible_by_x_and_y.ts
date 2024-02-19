/**
 * Is n divisible by x and y?
 * https://www.codewars.com/kata/5545f109004975ea66000086/train/typescript
 *
 */

export function isDivisible(n: number, x: number, y: number): boolean {
  return Number.isInteger(n / x) && Number.isInteger(n / y)
}
