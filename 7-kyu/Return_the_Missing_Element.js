/**
 * Return the Missing Element
 * https://www.codewars.com/kata/5299413901337c637e000004/train/javascript
 *
 */

const getMissingElement = superImportantArray => {
  const sortedArr = superImportantArray.sort((a, b) => a - b)

  for (let i = 0; i < 10; i++) {
    if (sortedArr[i] !== i) {
      return i
    }
  }
}
