/**
 * Hungarian Vowel Harmony (easy)
 * https://www.codewars.com/kata/57fd696e26b06857eb0011e7/train/javascript
 *
 */

const dative = word => {
  for (let i = word.length - 1; i >= 0; i--) {
    const char = word[i]

    if (/[eéiíöőüű]/i.test(char)) return (word += 'nek')
    if (/[aáoóuú]/i.test(char)) return (word += 'nak')
  }

  return word
}
