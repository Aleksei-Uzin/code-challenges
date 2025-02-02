/**
 * Shuffle an Array
 * https://www.codewars.com/kata/566b51166f88d7560c00001a/train/javascript
 *
 */

const getRandomInd = max => {
  return Math.floor(Math.random() * max)
}

const shuffle = arr => {
  const len = arr.length

  for (let i = 0; i < len; i++) {
    const newInd = getRandomInd(len)
    const temp = arr[newInd]
    arr[newInd] = arr[i]
    arr[i] = temp
  }

  return arr
}
