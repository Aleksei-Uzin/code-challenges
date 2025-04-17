/**
 * Josephus Survivor
 * https://www.codewars.com/kata/555624b601231dc7a400017a/train/javascript
 *
 */

const josephusSurvivor = (n, k) => {
  let survivor = 0

  for (let i = 2; i <= n; i++) {
    survivor = (survivor + k) % i
  }

  return survivor + 1
}
