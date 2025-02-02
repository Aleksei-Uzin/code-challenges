/**
 * Another one down—the Survival of the Fittest!
 * https://www.codewars.com/kata/563ce9b8b91d25a5750000b6/train/javascript
 *
 */

const removeSmallest = (n, arr) => {
  if (n <= 0) return arr
  if (n > arr.length) return []

  const res = arr.slice()

  while (n > 0) {
    const index = res.indexOf(Math.min(...res))
    res.splice(index, 1)
    n--
  }

  return res
}
