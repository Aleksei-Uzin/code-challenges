/**
 * Incrementer
 * https://www.codewars.com/kata/590e03aef55cab099a0002e8/train/javascript
 *
 */

const incrementer = nums => nums.map((n, i) => (n + i + 1) % 10)
