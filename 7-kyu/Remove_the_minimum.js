/**
 * Remove the minimum
 * https://www.codewars.com/kata/563cf89eb4747c5fb100001b/train/javascript
 *
 */

const removeSmallest = arr => {
  const minI = arr.indexOf(Math.min(...arr))

  return arr.filter((_, i) => i !== minI)
}
