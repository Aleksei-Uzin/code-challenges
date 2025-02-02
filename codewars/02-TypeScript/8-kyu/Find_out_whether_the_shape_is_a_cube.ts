/**
 * Find out whether the shape is a cube
 * https://www.codewars.com/kata/58d248c7012397a81800005c/train/typescript
 *
 */

export function cubeChecker(volume: number, side: number): boolean {
  return volume > 0 && side ** 3 === volume
}
