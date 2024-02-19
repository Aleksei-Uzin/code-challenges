/**
 * Century From Year
 * https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
 *
 */

function century(year) {
  const arr = String(year / 100).split('.').map(x => Number(x))
  const isNewCentuyrStart = arr[1] > 0
  
  return isNewCentuyrStart ? arr[0] + 1 : arr[0]
}

// Best Practice
//
// const century = year => Math.ceil(year/100)
