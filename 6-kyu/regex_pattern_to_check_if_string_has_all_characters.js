/**
 * regex pattern to check if string has all characters
 * https://www.codewars.com/kata/5e4eb72bb95d28002dbbecde/train/javascript
 *
 */

const regexContainsAll = str => {
  const match = [...str].map(c => `(?=.*${c})`).join('')

  return new RegExp(`^(${match}).*$`)
}

// Best practice
//
// function regexContainsAll(str) {
//   return str.replace(/./g, '(?=.*$&)');
// }
