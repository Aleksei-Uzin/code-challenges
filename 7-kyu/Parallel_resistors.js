/**
 * Parallel resistors
 * https://www.codewars.com/kata/5723b111101f5f905f0000a5/train/javascript
 *
 */

const resistor_parallel = (...args) => {
  const sum = args.reduce((acc, val) => acc + 1 / val, 0)

  return 1 / sum
}
