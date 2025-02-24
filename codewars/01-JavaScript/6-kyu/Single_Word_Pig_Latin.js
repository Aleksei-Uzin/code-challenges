/**
 * Single Word Pig Latin
 * https://www.codewars.com/kata/558878ab7591c911a4000007/train/javascript
 *
 */

const pigLatin = str => {
  str = str.toLowerCase()
  if (/[0-9]/.test(str)) return null
  if (/^[aeiou]/.test(str)) return `${str}way`
  else return `${str.replace(/^([^aeiou]+)(.*)/, '$2$1')}ay`
}
