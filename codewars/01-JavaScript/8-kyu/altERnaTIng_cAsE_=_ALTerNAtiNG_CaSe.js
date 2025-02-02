/**
 * altERnaTIng cAsE <=> ALTerNAtiNG CaSe
 * https://www.codewars.com/kata/56efc695740d30f963000557/train/javascript
 *
 */

String.prototype.toAlternatingCase = function () {
  let res = ''
  
  this.split('').forEach(char => {
    if(char.toUpperCase() === char) {
      res += char.toLowerCase()
    } else {
      res += char.toUpperCase()
    }
  })
  
  return res
}
