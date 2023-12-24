/**
 * Split string by multiple delimiters
 * https://www.codewars.com/kata/575690ee34a34efb37001796/train/javascript
 *
 */

const multipleSplit = (str, delimiters = []) => {
  for (let delim of delimiters) {
    str = str.replace(new RegExp('\\' + delim, 'g'), ',')
  }

  return str.split(',').filter(val => val !== '')
}
