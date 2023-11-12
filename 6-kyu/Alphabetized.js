/**
 * Alphabetized
 * https://www.codewars.com/kata/5970df092ef474680a0000c9/train/javascript
 *
 */

const alphabetized = str => {
  const res = []

  for (let char of str) {
    if (/[a-z]/i.test(char)) {
      const index = char.toLowerCase().charCodeAt(0) % 97
      !res[index] ? (res[index] = [char]) : res[index].push(char)
    }
  }

  return res
    .filter(Array.isArray)
    .map(val => val.join(''))
    .join('')
}
