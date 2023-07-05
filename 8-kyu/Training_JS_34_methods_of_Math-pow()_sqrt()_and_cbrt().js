/**
 * Training JS #34: methods of Math---pow() sqrt() and cbrt()
 * https://www.codewars.com/kata/5733f948d780e27df6000e33/train/javascript
 *
 */

const cutCube = (v, n) => !(Math.cbrt(n) % 1) && !(Math.cbrt(v / n) % 1)
