/**
 * How can I throw an error here?
 * https://www.codewars.com/kata/5970f479e75b6c00ce000043/train/javascript
 *
 */

const bang = () => {
  try {
    n++
  } catch (e) {
    const it = (function* () {})()
    it[`${'th'}row`](
      new (proto(proto(e)).constructor)(`Just ${'th'}row like this!`)
    )
  }
}
const proto = Object.getPrototypeOf
