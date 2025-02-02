/**
 * Simplifying multilinear polynomials
 * https://www.codewars.com/kata/55f89832ac9a66518f000118/train/javascript
 *
 */

const simplify = poly => {
  const obj = poly
    .replace(/[a-z]{2,}/g, m => [...m].sort().join(''))
    .match(/-?[a-z\d]+/g)
    .reduce((acc, val) => {
      const [, lett] = /([a-z]+)/.exec(val)

      if (!acc[lett]) acc[lett] = [val]
      else acc[lett].push(val)

      return acc
    }, {})
  const items = Object.values(obj)
    .map(item =>
      item.reduce((a, b) => {
        const [, signA, numA, lettA] = /(-?)(\d*)([a-z]+)/.exec(a)
        const [, signB, numB] = /(-?)(\d*)/.exec(b)
        const finalNumA = Number(`${signA}${numA || 1}`)
        const finalNumB = Number(`${signB}${numB || 1}`)
        return `${finalNumA + finalNumB}${lettA}`
      })
    )
    .filter(val => !/^-?0[a-z]+/.test(val))
    .sort((a, b) => {
      const [, lettA] = /([a-z]+)/.exec(a)
      const [, lettB] = /([a-z]+)/.exec(b)
      const lenA = lettA.length
      const lenB = lettB.length

      return lenA !== lenB ? lenA - lenB : lettA.localeCompare(lettB)
    })

  return items
    .join('+')
    .replace(/\+\-/g, '-')
    .replace(/\b1(?=[a-z]+)/g, '')
}
