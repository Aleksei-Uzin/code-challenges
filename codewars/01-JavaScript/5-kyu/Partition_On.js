/**
 * Partition On
 * https://www.codewars.com/kata/525a037c82bf42b9f800029b/train/javascript
 *
 */

const partitionOn = (pred, items) => {
  const a = items.filter(val => !pred(val))
  const b = items.filter(pred)
  const len = items.length

  items.length = 0
  const lenA = a.length

  for (let i = 0, j = -lenA; i < len; i++, j++) {
    items[i] = i < lenA ? a[i] : b[j]
  }

  return a.length
}
