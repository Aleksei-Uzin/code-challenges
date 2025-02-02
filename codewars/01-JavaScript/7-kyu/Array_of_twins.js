/**
 * Array of twins
 * https://www.codewars.com/kata/58fdc60ed94f25a863000092/train/javascript
 *
 */

const twins = myArray => {
  const obj = myArray.reduce((acc, n) => {
    if (!acc[n]) acc[n] = 1
    else acc[n] += 1
    return acc
  }, {})
  return Object.values(obj).every(n => n === 2)
}
