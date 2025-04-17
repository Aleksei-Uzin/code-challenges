/**
 * Simple Fun #143: Is Survivor Number?
 * https://www.codewars.com/kata/58aa6141c9eb047fec000133/train/javascript
 *
 */

const survivor = n => {
  let step = 2

  while (n >= step) {
    if (n % step === 0) return false

    n -= Math.floor(n / step)
    step++
  }

  return true
}
