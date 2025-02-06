/**
 * Wordify an integer
 * https://www.codewars.com/kata/553a2461098c64ae53000041/train/javascript
 *
 */

const wordify = (n, res = '') => {
  const units = [
    'zero ',
    'one ',
    'two ',
    'three ',
    'four ',
    'five ',
    'six ',
    'seven ',
    'eight ',
    'nine ',
    'ten ',
    'eleven ',
    'twelve ',
    'thirteen ',
    'fourteen ',
    'fifteen ',
    'sixteen ',
    'seventeen ',
    'eighteen ',
    'nineteen ',
  ]
  const tens = [
    ,
    ,
    'twenty ',
    'thirty ',
    'forty ',
    'fifty ',
    'sixty ',
    'seventy ',
    'eighty ',
    'ninety ',
  ]

  if (n < 20) {
    res += units[n]
  } else if (n < 100) {
    const tmpN = n % 10
    const tensInd = (n - tmpN) / 10
    res += `${tens[tensInd]}${tmpN ? units[tmpN] : ''}`
  } else {
    const tempN = parseInt(n / 100)
    const newN = n - tempN * 100
    res += `${units[tempN]}hundred ${newN ? wordify(newN) : ''}`
  }

  return res.trim()
}
