/**
 * Compose functions (T Combinator)
 * https://www.codewars.com/kata/51f9d3db4095e07f130001ee/train/javascript
 *
 */

const compose = (value, ...args) => args.reduce((acc, fn) => fn(acc), value)
