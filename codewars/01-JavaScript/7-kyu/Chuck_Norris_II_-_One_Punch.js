/**
 * Chuck Norris II - One Punch
 * https://www.codewars.com/kata/57057a035eef1f7e790009ef/train/javascript
 *
 */

const onePunch = items =>
  typeof items == 'string' && items
    ? items.replace(/a|e/gi, '').split(' ').sort().join(' ')
    : 'Broken!'
