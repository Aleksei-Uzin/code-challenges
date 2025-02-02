/**
 * Add commas to a number
 * https://www.codewars.com/kata/56a115cadb39a2faa000001e/train/javascript
 *
 */

const commas = num => {
  let [int, float] = num.toFixed(3).split('.')
  int = int.replace(/\d(?=(\d{3})+$)/g, '$&,')
  float = float.replace(/0*$/, '')

  return float ? `${int}.${float}` : int
}

// Best practice:
//
// const commas = num => (+num.toFixed(3)).toString().replace(/\B(?=(\d{3})+(\.|$))/g, ',')
//
// const commas = num => num.toLocaleString()
