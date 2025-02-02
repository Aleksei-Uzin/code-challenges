/**
 * Training JS #29: methods of arrayObject---concat() and join()
 * https://www.codewars.com/kata/5731861d05d14d6f50000626/train/typescript
 *
 */

export function bigToSmall(arr: number[][]): string {
  return []
    .concat(...(arr as []))
    .sort((a, b) => b - a)
    .join('>')
}
