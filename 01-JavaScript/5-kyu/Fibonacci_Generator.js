/**
 * Fibonacci Generator
 * https://www.codewars.com/kata/522498c9906b0cfcb40001fc/train/javascript
 *
 */

function genfib() {
  let a = 0
  let b = 1

  return function fib() {
    const next = a

    a = b
    b += next

    return next
  }
}
