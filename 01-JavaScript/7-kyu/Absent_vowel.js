/**
 * Absent vowel
 * https://www.codewars.com/kata/56414fdc6488ee99db00002c/train/javascript
 *
 */

const absentVowel = x => {
  const vowels = 'aeiou'

  for (let vowel of vowels) {
    if (!x.includes(vowel)) return vowels.indexOf(vowel)
  }
}
