/**
 * Is there a vowel in there?
 * https://www.codewars.com/kata/57cff961eca260b71900008f/train/javascript
 *
 */

function isVow(a) {
  const copy = a.concat()
  const vowels = {
    97: 'a',
    101: 'e',
    105: 'i',
    111: 'o',
    117: 'u',
  }

  copy.forEach((x, i) => {
    const vowel = vowels[x]

    if(vowel) {
      copy.splice(i, 1, vowels[x])
    }
  })

  return copy
}
