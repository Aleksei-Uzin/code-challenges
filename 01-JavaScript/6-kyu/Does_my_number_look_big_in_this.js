/**
 * Does my number look big in this?
 * https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
 *
 */

const narcissistic = value => {
  const nums = [...value.toString()]
  const pow = nums.length

  return nums.reduce((acc, n) => acc + Number.parseInt(n) ** pow, 0) === value
}
