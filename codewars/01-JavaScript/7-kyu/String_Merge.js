/**
 * String Merge!
 * https://www.codewars.com/kata/597bb84522bc93b71e00007e/train/javascript
 *
 */

const stringMerge = (str1, str2, letter) => {
  const ind1 = str1.indexOf(letter)
  const ind2 = str2.indexOf(letter)

  return `${str1.slice(0, ind1)}${str2.slice(ind2)}`
}
