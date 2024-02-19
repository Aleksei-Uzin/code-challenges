/**
 * Not above the one!
 * https://www.codewars.com/kata/5b5097324a317afc740000fe/train/javascript
 *
 */

const binaryCleaner = arr => {
  const a = []
  const b = []

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    item <= 1 ? a.push(item) : b.push(i)
  }

  return [a, b]
}
