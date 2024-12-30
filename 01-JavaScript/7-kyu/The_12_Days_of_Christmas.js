/**
 * The 12 Days of Christmas
 * https://www.codewars.com/kata/57dd3a06eb0537b899000a64/train/javascript
 *
 */

const comparator = (a, b) => {
  if (/^a/i.test(a) || /^o/i.test(b)) return 1
  if (/^o/i.test(a) || /^a/i.test(b)) return -1
  if (/^\d/.test(a) && /^\d/.test(b)) {
    const [n1] = a.match(/^\d+/)
    const [n2] = b.match(/^\d+/)

    return +n2 - +n1
  }

  return 0
}
