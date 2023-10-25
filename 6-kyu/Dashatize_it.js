/**
 * Dashatize it
 * https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript
 *
 */

const dashatize = num => {
  const str = Math.abs(num).toString()

  if (str.length === 1) return str

  return str
    .replace(/[13579]/g, (match, i, str) => {
      if (i === 0) return `${match}-`
      else if (i === str.length - 1) return `-${match}`
      else return `-${match}-`
    })
    .replace(/-{2}/g, '-')
}
