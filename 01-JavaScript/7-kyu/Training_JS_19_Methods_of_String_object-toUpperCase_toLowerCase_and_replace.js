/**
 * Training JS #19: Methods of String object--toUpperCase() toLowerCase() and replace()
 * https://www.codewars.com/kata/5728203b7fc662a4c4000ef3/train/javascript
 *
 */

const alienLanguage = str =>
  str.toLowerCase().replace(/\w+(?=\w)/g, match => match.toUpperCase())
