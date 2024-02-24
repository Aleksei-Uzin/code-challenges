/**
 * Identify Case
 * https://www.codewars.com/kata/5819a6fdc929bae4f5000a33/train/javascript
 *
 */

const id = str => {
  if (/^\-?([a-z]+\-[a-z]*)+$/.test(str)) return 'kebab'
  else if (/^([a-z]+_[a-z]*)+$/.test(str)) return 'snake'
  else if (/^[a-zA-Z]+$/.test(str)) return 'camel'
  else return 'none'
}
