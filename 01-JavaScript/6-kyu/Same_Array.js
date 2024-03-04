/**
 * Same Array?
 * https://www.codewars.com/kata/558c04ecda7fb8f48b000075/train/javascript
 *
 */

const same = (aArr, bArr) => {
  const resA = aArr.map(arr => arr.sort()).sort()
  const resB = bArr.map(arr => arr.sort()).sort()

  return resA.toString() === resB.toString()
}
