/**
 * Custom sort function
 * https://www.codewars.com/kata/52105fab0bd0ce9dd00000fe/train/javascript
 *
 */

const sort = items => {
  const len = items.length - 1
  let count = 0

  for (let i = 0; i < len; i++) {
    const a = items[i]
    const b = items[i + 1]

    if (a > b) {
      items[i] = b
      items[i + 1] = a
    } else {
      count += 1
    }
  }

  return count !== len ? sort(items) : items
}
