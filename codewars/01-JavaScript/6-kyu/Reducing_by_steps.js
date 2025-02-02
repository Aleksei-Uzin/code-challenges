/**
 * Reducing by steps
 * https://www.codewars.com/kata/56efab15740d301ab40002ee/train/javascript
 *
 */

const gcdi = (a, b) => (b === 0 ? Math.abs(a) : gcdi(b, a % b))
const lcmu = (a, b) => Math.abs(a * b) / gcdi(a, b)
const som = (a, b) => a + b
const maxi = (a, b) => Math.max(a, b)
const mini = (a, b) => Math.min(a, b)
const operArray = (fct, arr, init) => arr.map((n, i) => (init = fct(n, init)))
