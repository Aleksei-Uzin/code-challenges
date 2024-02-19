/**
 * Word values
 * https://www.codewars.com/kata/598d91785d4ce3ec4f000018/train/javascript
 *
 */

const wordValue = arr =>
  arr.map((val, i) => {
    let res = 0

    for (let c of val) {
      if (/[a-z]/.test(c)) res += (c.charCodeAt() % 96) * (i + 1)
    }

    return res
  })
