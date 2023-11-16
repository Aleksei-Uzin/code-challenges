/**
 * Move Zeros
 * https://www.codewars.com/kata/55c098aa8468f3b9030000f1/train/javascript
 *
 */

const move_zeros = (arrNum, isRight = true) => {
  const nums = arrNum.filter(n => n !== 0)
  const zeros = arrNum.filter(n => n === 0)

  return isRight ? nums.concat(zeros) : zeros.concat(nums)
}
