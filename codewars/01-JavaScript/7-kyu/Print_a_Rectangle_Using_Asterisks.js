/**
 * Print a Rectangle Using Asterisks
 * https://www.codewars.com/kata/5937ae46377144bb2f000029/train/javascript
 *
 */

const getRectangleString = (width, height) => {
  if (width === 1 && height === 1) return '*\r\n'
  if (width === 1 && height === 2) return '*\r\n*\r\n'

  const solid = '*'.repeat(width)
  const midd = Array.from({ length: height - 2 }).fill(
    `*${' '.repeat(width - 2)}*`
  )

  return [solid, ...midd, solid].join('\r\n') + '\r\n'
}
