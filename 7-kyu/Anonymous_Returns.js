/**
 * Anonymous Returns
 * https://www.codewars.com/kata/53d4eec01f1a9b3020000786/train/javascript
 *
 */

name = 'The Window'

const alpha = {
  name: 'My Alpha',
  getNameFunc() {
    const self = this

    return function () {
      return self.name
    }
  },
}
