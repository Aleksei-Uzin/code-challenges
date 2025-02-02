/**
 * Maxed Out
 * https://www.codewars.com/kata/584bf3b969ebc573ed00000f/train/javascript
 *
 */

const maxedOut = arr => {
  const sum = arr.map(n => n ** 3).reduce((acc, val) => acc + val)

  return Number.isSafeInteger(sum) ? sum : "You've pushed me to the max!"
}
