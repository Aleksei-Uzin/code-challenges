/**
 * Closest elevator
 * https://www.codewars.com/kata/5c374b346a5d0f77af500a5a/train/javascript
 *
 */

const elevator = (left, right, call) =>
  Math.abs(call - right) <= Math.abs(call - left) ? 'right' : 'left'
