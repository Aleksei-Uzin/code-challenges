/**
 * Elevator Distance
 * https://www.codewars.com/kata/59f061773e532d0c87000d16/train/javascript
 *
 */

const elevatorDistance = array => {
  let res = 0

  for (let i = 0; i < array.length - 1; i++) {
    res += Math.abs(array[i] - array[i + 1])
  }

  return res
}
