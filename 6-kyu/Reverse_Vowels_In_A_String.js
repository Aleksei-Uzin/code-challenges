/**
 * Reverse Vowels In A String
 * https://www.codewars.com/kata/585db3e8eec141ce9a00008f/train/javascript
 *
 */

const reverseVowels = str => {
  const checkVowels = char => ['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())
  const arr = str.split('')
  const vowels = arr.filter(char => checkVowels(char))
  
  return arr.map(char => checkVowels(char) ? vowels.pop() : char).join('')
}
