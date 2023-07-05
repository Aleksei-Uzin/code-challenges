/**
 * Transportation on vacation 
 * https://www.codewars.com/kata/568d0dd208ee69389d000016/train/javascript
 *
 */

const rentalCarCost = d => {
  const rent = 40
  
  if(d >= 7) return d * rent - 50
  
  if(d >= 3) return d * rent - 20
  
  return d * rent
}
