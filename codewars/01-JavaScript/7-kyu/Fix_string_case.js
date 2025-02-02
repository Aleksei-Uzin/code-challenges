/**
 * Fix string case
 * https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript
 *
 */

const solve = str => {
  const isLowerCase = str.match(/[a-z]/g).length * 2 >= str.length

  return isLowerCase ? str.toLowerCase() : str.toUpperCase()
}
