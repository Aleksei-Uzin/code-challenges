/**
 * Once
 * https://www.codewars.com/kata/5307ff5b588fe6d7000000a5/train/javascript
 *
 */

const once = fn => {
  let firstCall = true

  return (...args) => {
    if(firstCall) {
      firstCall = false

      return fn.apply(null, args)
    }
  }
}
