/**
 * String incrementer
 * https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
 *
 */

const incrementString = str => {
  const lastNums = str.match(/\d+$/)
  const num = lastNums ? lastNums[0] : '0'
  let carry = 1
  let res = ''

  for (let i = num.length - 1; i >= 0 || carry; i--) {
    const n = Number(num[i])

    if (carry) {
      carry = n ? n + 1 : carry
      res = `${carry % 10}${res}`
      carry = Math.floor(carry / 10)
    } else {
      res = `${n}${res}`
    }
  }

  return lastNums ? str.replace(/\d+$/, res) : `${str}${res}`
}
