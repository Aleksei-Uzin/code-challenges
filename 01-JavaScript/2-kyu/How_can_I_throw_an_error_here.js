/**
 * How can I throw an error here?
 * https://www.codewars.com/kata/5970f479e75b6c00ce000043/train/javascript
 *
 */

const bang = () => {
  try {
    const n = 0
    n++
  } catch (e) {
    ;(function* () {})()['th' + 'row'](
      new (Object.getPrototypeOf(Object.getPrototypeOf(e)).constructor)(
        'Just th' + 'row like this!'
      )
    )
  }
}
