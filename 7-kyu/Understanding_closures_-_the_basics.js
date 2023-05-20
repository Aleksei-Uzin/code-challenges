/**
 * Understanding closures - the basics
 * https://www.codewars.com/kata/56b71b1dbd06e6d88100092a/train/javascript
 *
 */

function buildFun(n){
  var res = []

  for(var i = 0; i < n; i++) {
    res.push((j => () => j)(i))
  }

  return res
}
