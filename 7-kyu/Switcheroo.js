/**
 * Switcheroo
 * https://www.codewars.com/kata/57f759bb664021a30300007d/train/javascript
 *
 */

const switcheroo = x => {
  let res = ''

  for (let char of x) {
    if (char === 'a') res += 'b'
    else if (char === 'b') res += 'a'
    else res += char
  }

  return res
}
