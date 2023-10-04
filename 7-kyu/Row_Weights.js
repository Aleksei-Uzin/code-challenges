/**
 * Row Weights
 * https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
 *
 */

const rowWeights = array =>
  array.reduce((acc, val, i) => {
    acc[i % 2] += val
    return acc
  }, [0, 0])
