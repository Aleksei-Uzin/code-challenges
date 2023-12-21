/**
 * Array Calculator
 * https://www.codewars.com/kata/54224ce3dda526a97d00127d/train/javascript
 *
 */

const evaluate = arr => {
  let str = arr.join('')
  const isValidNums = arr.every(
    (val, i) =>
      (i % 2 === 0 && /\d/.test(val)) || (i % 2 !== 0 && /[\+\*]/.test(val))
  )
  const isValidSigns = /^(\d+[\+\*])+\d+$/.test(str)

  if (!isValidNums || !isValidSigns) return

  while (str.includes('*')) {
    str = str.replace(/(\d+\*\d+)/g, match => {
      const [a, b] = match.split('*')
      return parseInt(a) * parseInt(b)
    })
  }

  return str.split('+').reduce((sum, n) => sum + parseInt(n), 0)
}
