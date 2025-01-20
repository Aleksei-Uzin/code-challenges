/**
 * More Zeros than Ones
 * https://www.codewars.com/kata/5d41e16d8bad42002208fe1a/train/javascript
 *
 */

const moreZeros = s => {
  const set = new Set(s)

  for (let c of set) {
    const nStr = c.charCodeAt().toString(2)
    const zeros = nStr.replace(/[1]/g, '')
    const ones = nStr.replace(/[0]/g, '')
    if (zeros.length <= ones.length) set.delete(c)
  }

  return [...set]
}
