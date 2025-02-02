/**
 * Band name generator
 * https://www.codewars.com/kata/59727ff285281a44e3000011/train/javascript
 *
 */

const toUpper = match => match.toUpperCase()
const bandNameGenerator = str =>
  str[0] === str[str.length - 1]
    ? str.replace(/\w+(?=\w)/, '$&$&').replace(/\w/, toUpper)
    : `The ${str.replace(/\w/, toUpper)}`
