/**
 * "Center yourself", says the monk.
 * https://www.codewars.com/kata/596b8a3fc4cb1de46b000001/train/javascript
 *
 */

const center = (str, width, fill = ' ') => {
  const len = str.length

  if (width < str.length) return str
  if (len === 0) return fill.repeat(width)

  const indent = width - len
  const left = fill.repeat(Math.round(indent / 2))
  const right = fill.repeat(indent - left.length)

  return `${left}${str}${right}`
}
