/**
 * Misleading Signs
 * https://www.codewars.com/kata/65dd5b414ccda60a4be32c2a/train/javascript
 *
 */

const gaslighting = (shirtWord, yourWord, friendsLetters) => {
  if (shirtWord === yourWord) return false

  for (let i = 0; i < shirtWord.length; i++) {
    const a = shirtWord[i]
    const b = yourWord[i]
    const res = new RegExp(`[${a}${b}]`).test(friendsLetters)

    if (a !== b && res) return true
  }

  return false
}
