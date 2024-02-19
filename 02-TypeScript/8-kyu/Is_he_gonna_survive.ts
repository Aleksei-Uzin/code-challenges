/**
 * Is he gonna survive?
 * https://www.codewars.com/kata/59ca8246d751df55cc00014c/train/typescript
 *
 */

export function hero(bullets: number, dragons: number): boolean {
  return ~~(bullets / 2) >= dragons
}
