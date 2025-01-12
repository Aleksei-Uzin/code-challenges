/**
 * Simple Fun #106: Is Thue Morse?
 * https://www.codewars.com/kata/589a9792ea93aae1bf00001c/train/javascript
 *
 */

const isThueMorse = seq => {
  const arr = [0]

  while (arr.length < seq.length) {
    arr.push(...arr.map(n => Number(!n)))
  }

  return seq.every((n, i) => arr[i] === n)
}
