/**
 * Scrolling Text
 * https://www.codewars.com/kata/5a995c2aba1bb57f660001fd/train/javascript
 *
 */

const scrollingText = (text, n = text.length, res = []) => {
  if (n === 0) return res.map(val => val.toUpperCase())

  const head = text.slice(0, 1)
  const tail = text.slice(1)
  res.push(text)

  return scrollingText(`${tail}${head}`, n - 1, res)
}
