/**
 * Unique string characters
 * https://www.codewars.com/kata/5a262cfb8f27f217f700000b/train/javascript
 *
 */

const solve = (a, b) => {
  const maxLen = a.length > b.length ? a.length : b.length
  let resA = ''
  let resB = ''

  for (let i = 0; i < maxLen; i++) {
    const charA = a[i]
    const charB = b[i]

    if (charA && !b.includes(charA)) resA += charA
    if (charB && !a.includes(charB)) resB += charB
  }

  return resA + resB
}
