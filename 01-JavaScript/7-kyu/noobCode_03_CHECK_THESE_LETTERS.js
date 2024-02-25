/**
 * noobCode 03: CHECK THESE LETTERS... see if letters in "String 2" are present in "String 1"
 * https://www.codewars.com/kata/57470efebf81fea166001627/train/javascript
 *
 */

const letterCheck = ([a, b]) => {
  const set = [...new Set(b.replace(/[^a-z]/gi, ''))]

  return set.every(c => !!a.match(new RegExp(c, 'i')))
}
