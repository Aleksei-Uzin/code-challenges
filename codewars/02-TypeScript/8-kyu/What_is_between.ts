/**
 * What is between?
 * https://www.codewars.com/kata/55ecd718f46fba02e5000029/train/typescript
 *
 */

export function between(a: number, b: number): number[] {
  const res: number[] = []

  for (let i = a; i <= b; res.push(i++));

  return res
}
