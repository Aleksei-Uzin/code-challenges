/**
 * Is your period late?
 * https://www.codewars.com/kata/578a8a01e9fd1549e50001f1/train/javascript
 *
 */

const periodIsLate = (last, today, cycleLength) => {
  const nextCycle = last.setDate(last.getDate() + cycleLength)
  
  return today > nextCycle ? true : false
}
