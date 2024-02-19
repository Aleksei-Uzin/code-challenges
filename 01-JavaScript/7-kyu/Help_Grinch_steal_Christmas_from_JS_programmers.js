/**
 * Help Grinch steal Christmas from JS programmers
 * https://www.codewars.com/kata/63387232198a4c00286aa349/train/javascript
 *
 */

Date.prototype.getDate = function getGrinchDate() {
  const month = this.getMonth()
  const now = this.toDateString()
  const day = now.match(/\d{2}/)[0]
  
  if(month === 11 && day === '25') return '26'
  
  return day
}
