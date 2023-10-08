/**
 * Automorphic Number (Special Numbers Series #6)
 * https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript
 *
 */

// A
const automorphic = n =>
  (n ** 2).toString().endsWith(n) ? 'Automorphic' : 'Not!!'

// B
const _automorphic = n => {
  const str = n.toString()
  const res = (n ** 2).toString()

  for (let i = 0, j = res.length - str.length; i < str.length; i++, j++) {
    if (str[i] !== res[j]) return 'Not!!'
  }

  return 'Automorphic'
}
