/**
 * 254 shades of grey
 * https://www.codewars.com/kata/54d22119beeaaaf663000024/train/javascript
 *
 */

const shadesOfGrey = n => {
  if (n < 1) return []
  if (n > 254) n = 254

  return Array.from(
    { length: n },
    (_, i) => `#${(i + 1).toString(16).padStart(2, '0').repeat(3)}`
  )
}
