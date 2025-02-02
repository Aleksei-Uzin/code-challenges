/**
 * Double Every Other
 * https://www.codewars.com/kata/5809c661f15835266900010a/train/javascript
 *
 */

const doubleEveryOther = a => a.map((n, i) => (i % 2 ? n * 2 : n))
