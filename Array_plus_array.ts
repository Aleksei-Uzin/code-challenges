/**
 * Array plus array
 * https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/typescript
 *
 */

export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  const sum = (acc: number, val: number) => acc + val

  return arr1.reduce(sum) + arr2.reduce(sum)
}
