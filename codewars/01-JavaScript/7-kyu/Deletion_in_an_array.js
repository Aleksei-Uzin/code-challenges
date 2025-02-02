/**
 * Deletion in an array
 * https://www.codewars.com/kata/5505552bd181b990d9000caf/train/javascript
 *
 */

const deleteValues = (array, pred) => {
  for (let i = 0; i < array.length; i++) {
    if (pred(array[i])) {
      array.splice(i, 1)
      i--
    }
  }

  return array
}
