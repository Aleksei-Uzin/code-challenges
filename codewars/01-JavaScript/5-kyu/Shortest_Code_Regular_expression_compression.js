/**
 * Shortest Code : Regular expression compression
 * https://www.codewars.com/kata/5707c6e74f2c29a750001f8b/train/javascript
 *
 */

const sc = r =>
  r.replace(/\/(\w+?)(\1+)\//, (a, b, c) => {
    const lB = b.length
    const p = lB > 1 ? `(${b})` : b
    const n = Math.ceil((c.length + 1) / lB)
    const newR = `/${p}{${n}}/`

    return newR.length < a.length ? newR : a
  })
