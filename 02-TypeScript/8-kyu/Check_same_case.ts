/**
 * Check same case
 * https://www.codewars.com/kata/5dd462a573ee6d0014ce715b/train/typescript
 *
 */

export function sameCase(a: string, b: string): number {
  const str = a + b

  if (/[A-Z]{2}|[a-z]{2}/.test(str)) return 1
  else if (/[a-z]{2}/i.test(str)) return 0
  else return -1
}
