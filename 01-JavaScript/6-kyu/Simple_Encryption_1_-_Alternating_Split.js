/**
 * Simple Encryption #1 - Alternating Split
 * https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript
 *
 */

function encrypt(text, n) {
  if (!text || n <= 0) return text

  let even = ''
  let odd = ''

  for (let i = 0; i < text.length; i++) {
    i % 2 ? (even += text[i]) : (odd += text[i])
  }

  return encrypt(`${even}${odd}`, n - 1)
}

function decrypt(encryptedText, n) {
  if (n <= 0) return encryptedText

  const len = encryptedText.length
  const midInd = ~~(len / 2)
  let decryptedText = ''

  for (let i = 0, j = midInd; j < len; i++, j++) {
    const a = encryptedText[midInd + i] || ''
    const b = i < midInd ? encryptedText[i] : ''

    decryptedText += `${a}${b}`
  }

  return decrypt(decryptedText, n - 1)
}
