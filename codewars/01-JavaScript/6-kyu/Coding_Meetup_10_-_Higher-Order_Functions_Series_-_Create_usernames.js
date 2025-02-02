/**
 * Coding Meetup #10 - Higher-Order Functions Series - Create usernames
 * https://www.codewars.com/kata/582a53ed261c2af9d200018c/train/javascript
 *
 */

function addUsername(list) {
  for(const obj of list) {
    const { firstName: first, lastName: last, age } = obj
    const currentYear = (new Date()).getFullYear()

    obj.username = first.toLowerCase() + last[0].toLowerCase() + (currentYear - age)
  }
  
  return list
}
