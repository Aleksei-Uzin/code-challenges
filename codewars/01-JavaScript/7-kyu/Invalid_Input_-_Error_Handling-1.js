/**
 * Invalid Input - Error Handling #1
 * https://www.codewars.com/kata/55e6125ad777b540d9000042/train/javascript
 *
 */

const getCount = words => {
  if (typeof words !== 'string') return { vowels: 0, consonants: 0 }

  const str = words.replace(/[^a-z]/gi, '')
  const consonants = /[^aeiou]/gi.test(str) ? str.match(/[^aeiou]/gi).length : 0
  const vowels = /[aeiou]/gi.test(str) ? str.match(/[aeiou]/gi).length : 0

  return { vowels, consonants }
}
