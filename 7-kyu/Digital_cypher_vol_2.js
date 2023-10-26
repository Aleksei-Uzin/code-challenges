/**
 * Digital cypher vol 2
 * https://www.codewars.com/kata/592edfda5be407b9640000b2/train/javascript
 *
 */

const decode = (code, n) =>
  code
    .map((val, i) => {
      const str = n.toString()
      const index = i % str.length

      return String.fromCodePoint(val - str[index] + 96)
    })
    .join('')
