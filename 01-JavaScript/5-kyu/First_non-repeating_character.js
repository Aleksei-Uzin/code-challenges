/**
 * First non-repeating character
 * https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
 *
 */

const firstNonRepeatingLetter = str => {
  const lowerCase = str.toLowerCase()

  for (let i = 0; i < str.length; i++) {
    const c = lowerCase[i]

    if (lowerCase.indexOf(c) === lowerCase.lastIndexOf(c)) return str[i]
  }

  return ''
}
