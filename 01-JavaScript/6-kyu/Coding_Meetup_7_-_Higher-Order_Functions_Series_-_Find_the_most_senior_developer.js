/**
 * Coding Meetup #7 - Higher-Order Functions Series - Find the most senior developer
 * https://www.codewars.com/kata/582887f7d04efdaae3000090/train/javascript
 *
 */

const findSenior = list => {
  const ageArr = list.map(({ age }) => age)
  const maxAge = Math.max(...ageArr)

  return list.filter(({ age }) => age === maxAge)
}
