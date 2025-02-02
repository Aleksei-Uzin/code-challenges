/**
 * Learning TypeScript. Advanced Types. Intersection Types
 * https://www.codewars.com/kata/5916c87540ef95d8e1000007/train/typescript
 *
 */

export function intersect<T extends Object, U extends Object>(
  first: T,
  second: U
): T & U {
  let result = <T & U>{}

  for (let [key, value] of Object.entries(first)) {
    if (key in second) Object.assign(result, { [key]: value })
  }

  return result
}
