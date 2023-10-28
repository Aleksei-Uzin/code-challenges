/**
 * All Inclusive?
 * https://www.codewars.com/kata/5700c9acc1555755be00027e/train/javascript
 *
 */

const containAllRots = (str, arr) => {
  for (let i = 0; i < str.length; i++) {
    if (!arr.includes(str)) return false

    str = str.replace(/(.+(?=.$))(.)/, '$2$1')
  }

  return true
}
