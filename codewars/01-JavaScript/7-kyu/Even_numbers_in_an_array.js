/**
 * Even numbers in an array
 * https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/train/javascript
 *
 */

const evenNumbers = (array, number) => {
  return array.reduceRight((acc, val) => {
    if (number > 0 && val % 2 === 0) {
      acc.unshift(val)
      number -= 1
      return acc
    } else {
      return acc
    }
  }, [])
}
