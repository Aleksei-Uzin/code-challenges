/**
 * Sum of differences in array
 * https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e/train/typescript
 *
 */

export function sumOfDifferences(arr: number[]): number {
  return arr
    .sort((a, b) => b - a)
    .reduce(
      (sum, n, i, a) => (i < a.length - 1 ? sum + (n - a[i + 1]) : sum),
      0
    )
}
