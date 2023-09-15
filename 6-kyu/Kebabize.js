/**
 * Kebabize
 * https://www.codewars.com/kata/57f8ff867a28db569e000c4a/train/javascript
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#using_an_inline_function_that_modifies_the_matched_characters
 * 
 */

const kebabize = str => {
  const addHyphen = (match, offset) => (offset > 0 ? "-" : "") + match.toLowerCase()

  return str.replace(/\d/g, '').replace(/[A-Z]/g, addHyphen)
}
