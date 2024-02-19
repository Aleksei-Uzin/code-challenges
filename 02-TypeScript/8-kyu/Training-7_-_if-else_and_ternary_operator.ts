/**
 * Training JS #7: if..else and ternary operator
 * https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/typescript
 *
 */

export function saleHotdogs(n: number): number {
  if (n < 5) return n * 100
  else if (n < 10) return n * 95
  else return n * 90
}
