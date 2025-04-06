/**
 * I love big nums and I cannot lie
 * https://www.codewars.com/kata/56121f3312baa28c8500005b/train/javascript
 *
 */

const biggest = nums => {
  const res = nums
    .map(String)
    .sort((a, b) => (b + a).localeCompare(a + b))
    .join('')

  return /^0+$/.test(res) ? '0' : res
}
