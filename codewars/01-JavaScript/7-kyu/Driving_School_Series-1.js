/**
 * Driving School Series #1
 * https://www.codewars.com/kata/58999425006ee3f97c00011f/train/javascript
 *
 */

const passed = list => {
  const testPassed = list.filter(n => n <= 18)
  const sum = testPassed.reduce((acc, n) => acc + n, 0)

  return sum
    ? Math.round(sum / testPassed.length)
    : 'No pass scores registered.'
}
