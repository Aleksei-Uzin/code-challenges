/**
 * Oh dear God! Is it bugged?
 * https://www.codewars.com/kata/580e67ae22e42d797000015e/train/javascript
 *
 */

const isItBugged = code => {
  return /^\d{2}-\d{2}-\d{4} \d\d:\d\d/.test(code)
}
