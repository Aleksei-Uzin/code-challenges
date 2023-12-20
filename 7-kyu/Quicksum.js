/**
 * Quicksum
 * https://www.codewars.com/kata/569924899aa8541eb200003f/train/javascript
 *
 */

const quicksum = packet =>
  /^[A-Z ]+$/.test(packet)
    ? [...packet].reduce(
        (sum, c, i) =>
          c !== ' ' ? sum + (c.charCodeAt() % 64) * (i + 1) : sum,
        0
      )
    : 0
