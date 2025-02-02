/**
 * From A to Z
 * https://www.codewars.com/kata/6512b3775bf8500baea77663/train/javascript
 *
 */

const gimmeTheLetters = sp => {
  const abc = 'abcdefghijklmnopqrstuvwxyz'
  const res = abc.replace(new RegExp(`[^${sp}]`, 'gi'), '')

  return /[A-Z]/.test(sp) ? res.toUpperCase() : res
}
