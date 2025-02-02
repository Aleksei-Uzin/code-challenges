/**
 * Fizz / Buzz
 * https://www.codewars.com/kata/51dda84f91f5b5608b0004cc/train/javascript
 *
 */

const solution = number => {
  const res = [0, 0, 0]

  for (let i = 3; i < number; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      res[2] += 1
      continue
    }

    if (i % 5 === 0) res[1] += 1
    if (i % 3 === 0) res[0] += 1
  }

  return res
}
