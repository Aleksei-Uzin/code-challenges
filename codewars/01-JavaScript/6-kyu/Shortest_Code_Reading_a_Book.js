/**
 * Shortest Code : Reading a Book
 * https://www.codewars.com/kata/570c560c15944a98e9000fd2/train/javascript
 *
 */

const sc = (w, s = new Set()) =>
  (w.toLowerCase().match(/[a-z]+/gi) || []).reduce(
    (acc, l) => (s.has(l) ? acc + 1 : (s.add(l), acc + l.length)),
    0
  )
