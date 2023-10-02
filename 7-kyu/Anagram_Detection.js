/**
 * Anagram Detection
 * https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript
 *
 */

const getLetters = str => str.toLowerCase().split('').sort().join('')
const isAnagram = (test, original) =>
  test.length === original.length
    ? getLetters(test) === getLetters(original)
    : false
