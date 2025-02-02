/**
 * Implement Array.prototype.filter()
 * https://www.codewars.com/kata/56dd9b84fe5754786f0014f7/train/javascript
 *
 */

Array.prototype.filter = function(func) {
  const len = this.length
  const res = []
  
  for(let i = 0; i < len; i++) {
    func(this[i]) && res.push(this[i])
  }
  
  return res
}
