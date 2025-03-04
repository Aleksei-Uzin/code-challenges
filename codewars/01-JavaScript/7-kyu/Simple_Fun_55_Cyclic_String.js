/**
 * Simple Fun #55: Cyclic String
 * https://www.codewars.com/kata/58899594b832f80348000122/train/javascript
 *
 */

const cyclicString = str => {
  const n = str.length

  for (let i = 1; i <= n; i++) {
    const pattern = str
      .slice(0, i)
      .repeat(Math.ceil(n / i))
      .slice(0, n)

    if (pattern === str) {
      return i
    }
  }

  return n
}
