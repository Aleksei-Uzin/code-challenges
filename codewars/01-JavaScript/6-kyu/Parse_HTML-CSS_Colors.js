/**
 * Parse HTML/CSS Colors
 * https://www.codewars.com/kata/58b57ae2724e3c63df000006/train/javascript
 *
 */

const parseHTMLColor = color => {
  color = color.toLowerCase()
  const clr = /^[a-z]/i.test(color) ? PRESET_COLORS[color] : color
  const [, r, g, b] = /([a-f\d]{1,2})([a-f\d]{1,2})([a-f\d]+)/i
    .exec(clr)
    .map(n => parseInt(n.length % 2 ? `${n}${n}` : n, 16))

  return { r, g, b }
}
