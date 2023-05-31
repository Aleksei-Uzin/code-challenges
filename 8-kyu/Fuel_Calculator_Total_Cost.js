/**
 * Fuel Calculator: Total Cost
 * https://www.codewars.com/kata/57b58827d2a31c57720012e8/train/javascript
 *
 */

function fuelPrice(litres, price) {
  let discount = 0
  
  if(litres >= 2) discount = 5
  if(litres >= 4) discount = 10
  if(litres >= 6) discount = 15
  if(litres >= 8) discount = 20
  if(litres >= 10) discount = 25

  const totalPrice = price - discount / 100
  const result = (litres * totalPrice).toFixed(2)
  
  return Number(result)
}
