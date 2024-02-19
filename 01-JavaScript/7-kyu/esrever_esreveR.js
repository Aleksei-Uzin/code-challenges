/**
 * esrever esreveR!
 * https://www.codewars.com/kata/57e0206335e198f82b00001d/train/javascript
 *
 */

const esrever = str => {
  if (!str) return str

  const sign = str.slice(-1)
  return (
    str
      .slice(0, -1)
      .split(' ')
      .reverse()
      .map(word => word.split('').reverse().join(''))
      .join(' ') + sign
  )
}
