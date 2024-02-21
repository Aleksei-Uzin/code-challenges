/**
 * Arithmetic progression
 * https://www.codewars.com/kata/55caf1fd8063ddfa8e000018/train/javascript
 *
 */

const arithmeticSequenceElements = (a, d, n) => {
  const arr = []

  while (n > 0) {
    arr.push(a)
    a += d
    n -= 1
  }

  return arr.join(', ')
}
