/**
 * Add property to every object in array
 * https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1/train/javascript
 *
 */

questions.map(obj => Object.assign(obj, { usersAnswer: null }))
