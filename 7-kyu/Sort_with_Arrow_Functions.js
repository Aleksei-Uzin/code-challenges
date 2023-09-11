/**
 * Sort with Arrow Functions
 * https://www.codewars.com/kata/559f3e20f4f29869cf0000ea/train/javascript
 *
 */

const OrderPeople = people => people.sort(({ age: a }, { age: b }) => a - b)
