/**
 * Simple string characters
 * https://www.codewars.com/kata/5a29a0898f27f2d9c9000058/train/javascript
 *
 */

const solve = str => {
  const res = [0, 0, 0, 0]

  for (let char of str) {
    if (/[A-Z]/.test(char)) res[0] += 1
    else if (/[a-z]/.test(char)) res[1] += 1
    else if (/\d/.test(char)) res[2] += 1
    else res[3] += 1
  }

  return res
}
