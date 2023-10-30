/**
 * Number to digit tiers
 * https://www.codewars.com/kata/586bca7fa44cfc833e00005c/train/javascript
 *
 */

const createArrayOfTiers = num => {
  const str = num.toString()
  const res = []

  for (let i = 0; i < str.length; i++) {
    res[i] = str.slice(0, i + 1)
  }

  return res
}
