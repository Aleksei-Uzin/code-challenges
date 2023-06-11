/**
 * Training JS #13: Number object and its properties
 * https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript
 *
 */

const whatNumberIsIt = n => {
  const str = 'Input number is'
  switch(n) {
    case Number.MAX_VALUE:
      return `${str} Number.MAX_VALUE`
    case Number.MIN_VALUE:
      return `${str} Number.MIN_VALUE`
    case Number.NEGATIVE_INFINITY:
      return `${str} Number.NEGATIVE_INFINITY`
    case Number.POSITIVE_INFINITY:
      return `${str} Number.POSITIVE_INFINITY`
    case n:
      return `${str} ${n}`
    default:
      return `${str} Number.NaN`
  }
}
