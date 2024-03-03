/**
 * Vowel Shifting
 * https://www.codewars.com/kata/577e277c9fb2a5511c00001d/train/javascript
 *
 */

const vowelShift = (text, n) => {
  if (!text) return text

  const vowels = text.replace(/[^aeiou]/gi, '')
  const len = vowels.length
  let k = len

  return text.replace(/[aeiou]/gi, () => {
    const ind = (k++ - n) % len
    return ind !== -1 ? vowels.slice(ind, ind + 1) : vowels.slice(ind)
  })
}
