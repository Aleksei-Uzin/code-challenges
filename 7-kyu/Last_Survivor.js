/**
 * Last Survivor
 * https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript
 *
 */

const lastSurvivor = (letters, coords) => {
  const arr = letters.split('')

  while (coords.length) {
    arr.splice(coords.shift(), 1)
  }

  return arr.join('')
}
