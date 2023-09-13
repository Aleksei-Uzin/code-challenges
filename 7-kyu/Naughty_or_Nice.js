/**
 * Naughty or Nice
 * https://www.codewars.com/kata/5662b14e0a1fb8320a00005c/train/javascript
 *
 */

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const naughtyOrNice = data => {
  let naughty = 0
  let nice = 0
  
  months.forEach(month => {
    Object.values(data[month]).forEach(val => { val === 'Nice' ? nice += 1 : naughty += 1 })
  })
  
  return nice >= naughty ? 'Nice!' : 'Naughty!'
}
