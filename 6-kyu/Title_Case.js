/**
 * Title Case
 * https://www.codewars.com/kata/5202ef17a402dd033c000009/train/javascript
 *
 */

const toCapitalize = str => str.replace(/^\w/, char => char.toUpperCase())
const titleCase = (title, minorWords = '') =>
  title
    .toLowerCase()
    .split(' ')
    .map((val, i) => {
      if (i === 0) return toCapitalize(val)

      const reg = new RegExp(`\\b${val}\\b`, 'i')

      return !reg.test(minorWords) ? toCapitalize(val) : val
    })
    .join(' ')
