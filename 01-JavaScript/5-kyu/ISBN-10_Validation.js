/**
 * ISBN-10 Validation
 * https://www.codewars.com/kata/51fc12de24a9d8cb0e000001/train/javascript
 *
 */

const validISBN10 = isbn => {
  const validIsbn = /^\d{9}(\d|X)$/.test(isbn)
  let sum = 0

  if (!validIsbn) return false

  for (let [i, n] of [...isbn].entries()) {
    sum += n !== 'X' ? n * (i + 1) : 100
  }

  return !(sum % 11)
}
