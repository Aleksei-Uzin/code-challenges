/**
 * Every nth array element. (Basic)
 * https://www.codewars.com/kata/5753b987aeb792508d0010e2/train/javascript
 *
 */

const every = (arr, interval, start = 0) =>
  interval
    ? arr.filter((_, i) => (i === start ? ((start += interval), true) : false))
    : arr
