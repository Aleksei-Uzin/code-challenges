/**
 * Last Survivor
 * https://www.codewars.com/kata/609eee71109f860006c377d1/train/javascript
 *
 */

function lastSurvivor(letters, coords) {
  for (let n of coords) {
    letters = letters.slice(0, n) + letters.slice(n + 1)
  }

  return letters
}

// Previous solution
const lastSurvivor = (letters, coords) => {
  const arr = letters.split('')

  while (coords.length) {
    arr.splice(coords.shift(), 1)
  }

  return arr.join('')
}
