/**
 * Miles per gallon to kilometers per liter
 * https://www.codewars.com/kata/557b5e0bddf29d861400005d/train/javascript
 *
 */

const converter = mpg => {
  const gallon = 4.54609188
  const mile = 1.609344
  const km = (mpg / gallon * mile).toFixed(2)
  
  return Number(km)
}
