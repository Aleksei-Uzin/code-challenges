/**
 * Break camelCase
 * https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
 *
 */

const solution = str => {
  const breakCamelCase = (match, offset) => (offset > 0 ? " " : "") + match

  return str.replace(/[A-Z]/g, breakCamelCase)
}
