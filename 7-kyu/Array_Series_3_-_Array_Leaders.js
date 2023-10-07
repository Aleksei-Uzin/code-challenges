/**
 * Array Leaders (Array Series #3)
 * https://www.codewars.com/kata/5a651865fd56cb55760000e0/train/javascript
 *
 */

const arrayLeaders = numbers => {
  const res = []

  numbers.reduceRight((acc, val) => {
    if (val > acc) res.unshift(val)
    return (acc += val)
  }, 0)

  return res
}
