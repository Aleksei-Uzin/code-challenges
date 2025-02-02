/**
 * Grasshopper - Summation
 * https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/typescript
 *
 */

export const summation = (num: number) => {
  let res = 0

  for (let i = 1; i <= num; i++) {
    res += i
  }

  return res
}
