/**
 * You only need one - Beginne
 * https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/typescript
 *
 */

export const check = (a: (number | string)[], x: number | string): boolean =>
  a.some(val => val === x)
