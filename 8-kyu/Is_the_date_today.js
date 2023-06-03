/**
 * Is the date today
 * https://www.codewars.com/kata/563c13853b07a8f17c000022/train/javascript
 *
 */

const isToday = date => {
  const today = new Date()
  const todayArr = [today.getFullYear(), today.getDate(), today.getDay()]
  const dateArr = [date.getFullYear(), date.getDate(), date.getDay()]
  
  return todayArr.join('.') === dateArr.join('.')
}

// Best Practice
// function isToday(date) {
//   return new Date().toDateString() === date.toDateString();
// }
