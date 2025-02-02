/**
 * Broken sequence
 * https://www.codewars.com/kata/5512e5662b34d88e44000060/train/javascript
 *
 */

const findMissingNumber = sequence => {
  if (/^[^1]|[a-z]/i.test(sequence)) return 1

  const arr = sequence.split(' ').map(Number)
  const first = arr[0]

  for (let [i, num] of arr.entries()) {
    if (first + i !== num) return first + i
  }

  return 0
}
