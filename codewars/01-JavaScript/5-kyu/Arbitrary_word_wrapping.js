/**
 * Arbitrary word wrapping
 * https://www.codewars.com/kata/51e8241aed85d42c810002aa/train/javascript
 *
 */

const wordWrap = str => {
  while (/^.{26,}$/m.test(str)) {
    str = str.replace(/^(.{24})(.)(.)/m, (_, n1, n2, n3) =>
      n2 === ' ' || n3 === ' ' ? `${n1}${n2}\n${n3}` : `${n1}-\n${n2}${n3}`
    )
  }

  return str
}
