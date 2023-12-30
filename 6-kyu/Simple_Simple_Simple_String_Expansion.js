/**
 * Simple Simple Simple String Expansion
 * https://www.codewars.com/kata/5ae326342f8cbc72220000d2/train/javascript
 *
 */

const stringExpansion = str =>
  str
    .replace(/\d[a-z]+/gi, m => {
      const [d, s] = m.match(/\d|[a-z]+/gi)
      return s.replace(/./g, m => m.repeat(d))
    })
    .replace(/\d+/g, '')
