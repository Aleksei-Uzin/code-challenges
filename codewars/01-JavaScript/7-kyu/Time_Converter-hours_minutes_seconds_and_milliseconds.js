/**
 * Time Converter: hours, minutes, seconds and milliseconds
 * https://www.codewars.com/kata/56b8b0ae1d36bb86b2000eaa/train/javascript
 *
 */

const convert = time => {
  const hh = formatTime(time.getHours())
  const mm = formatTime(time.getMinutes())
  const sec = formatTime(time.getSeconds())
  const ms = formatTime(time.getMilliseconds(), 3)

  return `${hh}:${mm}:${sec},${ms}`
}
const formatTime = (val, n = 2) => String(val).padStart(n, '0')
