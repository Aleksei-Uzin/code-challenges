/**
 * Coding Meetup #11 - Higher-Order Functions Series - Find the average age
 * https://www.codewars.com/kata/582ba36cc1901399a70005fc/train/javascript
 *
 */

const getAverageAge = list => {
  const totalAge = list.reduce((acc, { age }) => acc + age, 0)
  
  return Math.round(totalAge / list.length)
}
