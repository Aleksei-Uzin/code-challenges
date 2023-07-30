/**
 * Geometry Basics: Circle Area in 2D
 * https://www.codewars.com/kata/58e3f824a33b52c1dc0001c0/train/javascript
 *
 */

const circleArea = circle => {
  const { radius: R } = circle
  
  return Math.PI * (R ** 2)
}
