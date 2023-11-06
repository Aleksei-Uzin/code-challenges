/**
 * Valid Parentheses
 * https://www.codewars.com/kata/6411b91a5e71b915d237332d/train/javascript
 *
 */

const validParentheses = parenStr => {
  if (parenStr.length <= 2) return /(^\(\)$)|^$/.test(parenStr)

  return validParentheses(parenStr.split(/\(\)/).join(''))
}
