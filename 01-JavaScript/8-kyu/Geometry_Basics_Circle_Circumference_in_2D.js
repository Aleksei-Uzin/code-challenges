/**
 * Geometry Basics: Circle Circumference in 2D
 * https://www.codewars.com/kata/58e43389acfd3e81d5000a88/train/javascript
 *
 */

const circleCircumference = circle => {
  const { radius: R } = circle
  
  return 2 * Math.PI * R
}
