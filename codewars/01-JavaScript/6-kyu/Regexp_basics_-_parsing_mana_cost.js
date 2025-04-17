/**
 * Regexp basics - parsing mana cost
 * https://www.codewars.com/kata/5686004a2c7fade6b500002d/train/javascript
 *
 */

String.prototype.parseManaCost = function () {
  const str = this.toLowerCase()

  if (/[^0-9wubrg]/.test(str)) return null

  const match = str.match(/\d+|([a-z])\1*/g) || []
  const res = {}

  for (let m of match) {
    if (/^[1-9]\d*$/.test(m)) {
      res['*'] = Number.parseInt(m)
    }

    if (/^[a-z]+$/.test(m)) {
      const key = m[0]

      if (Object.hasOwn(res, key)) res[key] += m.length
      else res[key] = m.length
    }
  }

  return res
}
