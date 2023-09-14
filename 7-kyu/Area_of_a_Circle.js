/**
 * Area of a Circle
 * https://www.codewars.com/kata/537baa6f8f4b300b5900106c/train/javascript
 *
 */

const circleArea = radius => {
  if(radius <= 0) throw new Error('The radius must be a positive number greater than zero')
  
  return Math.PI * radius ** 2
}
