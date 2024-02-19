/**
 * How good are you really?
 * https://www.codewars.com/kata/5601409514fc93442500010b/train/typescript
 *
 */

export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  const sum = [yourPoints, ...classPoints].reduce((sum, val) => sum + val, 0)

  return sum / (classPoints.length + 1) < yourPoints
}
