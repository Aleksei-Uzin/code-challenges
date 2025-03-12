/**
 * Text align justify
 * https://www.codewars.com/kata/537e18b6147aa838f600001b/train/javascript
 *
 */

const justify = (text, width) =>
  (text.match(new RegExp(`\\w.{0,${width - 1}}(?=\\s|$)`, 'g')) || [])
    .map((str, i, arr) => {
      if (!/\s/.test(str) || i === arr.length - 1) return str

      let diff = width - str.length

      while (diff > 0) {
        str = str.replace(/\s+/g, m => ((diff -= 1) >= 0 ? `${m} ` : m))
      }

      return str
    })
    .join('\n')
