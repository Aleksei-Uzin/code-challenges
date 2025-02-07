/**
 * Inverting a Hash
 * https://www.codewars.com/kata/5b5604e26dc79e6832000101/train/javascript
 *
 */

const invertHash = hash => {
  for (let [key, value] of Object.entries(hash)) {
    hash[value] = key
    delete hash[key]
  }

  return hash
}
