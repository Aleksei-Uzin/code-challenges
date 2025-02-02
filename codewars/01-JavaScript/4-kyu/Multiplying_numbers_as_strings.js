/**
 * Multiplying numbers as strings
 * https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript
 *
 * https://www.geeksforgeeks.org/multiply-large-numbers-represented-as-strings/
 *
 */

const multiply = (num1, num2) => {
  if (num1 === '0' || num2 === '0') return '0'

  const m = num1.length - 1
  const n = num2.length - 1
  let carry = 0
  let product = ''

  for (let i = 0; i <= m + n + 1; i++) {
    for (let j = Math.max(0, i - n); j <= Math.min(i, m); j++) {
      carry += Number(num1[m - j]) * Number(num2[n - i + j])
    }

    product = `${carry % 10}${product}`
    carry = Math.floor(carry / 10)
  }

  return product.replace(/^0+/, '')
}

// B
const multiplyB = (num1, num2) => {
  let len1 = num1.length
  let len2 = num2.length
  if (len1 === 0 || len2 === 0) return '0'

  let result = new Array(len1 + len2).fill(0)
  let n = result.length - 1
  let i_n1 = 0
  let i_n2 = 0
  let strRes = ''

  // Go from right to left in num1
  for (let i = len1 - 1; i > -1; i--) {
    let carry = 0
    let n1 = num1[i].charCodeAt(0) - 48

    i_n2 = 0

    // Go from right to left in num2
    for (let j = len2 - 1; j > -1; j--) {
      let n2 = num2[j].charCodeAt(0) - 48
      let sum = n1 * n2 + result[i_n1 + i_n2] + carry

      carry = Math.floor(sum / 10)
      result[i_n1 + i_n2] = sum % 10
      i_n2 += 1
    }

    if (carry > 0) result[i_n1 + i_n2] += carry

    i_n1 += 1
  }

  while (n >= 0 && result[n] === 0) {
    n -= 1
  }

  if (n === -1) return '0'

  while (n >= 0) {
    strRes += String.fromCharCode(result[n] + 48)
    n -= 1
  }

  return strRes
}
