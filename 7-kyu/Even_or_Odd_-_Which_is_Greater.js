/**
 * Even or Odd - Which is Greater?
 * https://www.codewars.com/kata/57f7b8271e3d9283300000b4/train/javascript
 *
 */

const evenOrOdd = str => {
  const res = [...str].reduce(
    (sum, n) => (n % 2 === 0 ? sum + parseInt(n) : sum - parseInt(n)),
    0
  )

  return res === 0
    ? 'Even and Odd are the same'
    : res > 0
    ? 'Even is greater than Odd'
    : 'Odd is greater than Even'
}
