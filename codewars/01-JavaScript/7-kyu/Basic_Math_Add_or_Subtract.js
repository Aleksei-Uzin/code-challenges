/**
 * Basic Math (Add or Subtract)
 * https://www.codewars.com/kata/5809b62808ad92e31b000031/train/javascript
 *
 */

const calculate = str => {
  const nums = str.match(/\d+/g)
  const act = str.match(/\D+/g)

  return nums
    .reduce((acc, val, i) =>
      act[i - 1] === 'plus' ? Number(acc) + Number(val) : acc - val
    )
    .toString()
}
