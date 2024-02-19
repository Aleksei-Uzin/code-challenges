/**
 * Highest Rank Number in an Array
 * https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/train/javascript
 *
 */

const highestRank = arr => {
  const res = []

  arr.forEach(val => {
    res[val] = res[val] ? ++res[val] : 1
  })

  return res.lastIndexOf(Math.max(...res.filter(Number)))
}
