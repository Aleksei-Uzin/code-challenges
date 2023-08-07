/**
 * Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe
 * https://www.codewars.com/kata/582746fa14b3892727000c4f/train/javascript
 *
 */

const countDevelopers = list =>
  list
    .filter(dev => dev.continent === 'Europe' && dev.language === 'JavaScript')
    .length
