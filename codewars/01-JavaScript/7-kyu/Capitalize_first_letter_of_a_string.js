/**
 * Capitalize first letter of a string
 * https://www.codewars.com/kata/56c19316e8b139dff60006da/train/javascript
 *
 */

String.prototype.capitalize = function() {
  const abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  
  if(this.search(/^[a-z]/) < 0) return this.toString()

  const regex = new RegExp(this[0], 'i')
  const index = abc.findIndex(x => regex.test(x))

  return abc[index] + this.slice(1)
}
