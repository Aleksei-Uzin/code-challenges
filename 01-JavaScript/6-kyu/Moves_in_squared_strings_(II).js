/**
 * Moves in squared strings (II)
 * https://www.codewars.com/kata/56dbe7f113c2f63570000b86/train/javascript
 *
 */

const rot = str => [...str].reverse().join('')
const selfieAndRot = str => {
  const self = str.replace(/\w+/g, m => `${m}${'.'.repeat(m.length)}`)
  const rots = rot(str).replace(/\w+/g, m => `${'.'.repeat(m.length)}${m}`)
  return self.concat('\n', rots)
}
const oper = (fct, s) => fct(s)
