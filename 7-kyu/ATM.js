/**
 * ATM
 * https://www.codewars.com/kata/5635e7cb49adc7b54500001c/train/javascript
 *
 */

function solve(n) {
  function find(sum, res) {
    if(sum === n) {
      return res
    } else if(sum > n) {
      return null
    } else {
      res += 1

      return find(sum + 500, res)
        || find(sum + 200, res)
        || find(sum + 100, res)
        || find(sum + 50, res)
        || find(sum + 20, res)
        || find(sum + 10, res)
    }
  }

  return !(n % 10) ? find(0, 0) : -1
}
