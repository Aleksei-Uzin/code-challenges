/**
 * Convert ISBN-10 to ISBN-13
 * https://www.codewars.com/kata/61ce25e92ca4fb000f689fb0/train/javascript
 *
 */

const isbnConverter = isbn => {
  const newIsbn = `978-${isbn.slice(0, -1)}`
  const digits = newIsbn.replace(/\-/g, '')
  const res =
    [...digits].reduce((acc, n, i) => (i % 2 ? n * 3 + acc : +n + acc), 0) % 10

  return `${newIsbn}${res ? 10 - res : 0}`
}
