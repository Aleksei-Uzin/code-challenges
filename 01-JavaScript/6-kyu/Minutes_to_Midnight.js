/**
 * Minutes to Midnight
 * https://www.codewars.com/kata/58528e9e22555d8d33000163/train/javascript
 *
 */

const minutesToMidnight = d => {
  const hh = d.getHours()
  const mm = d.getMinutes()
  const ss = d.getSeconds()
  const res = Math.round(1440 - hh * 60 - mm - ss / 60)

  return `${res} minute${res > 1 ? 's' : ''}`
}
