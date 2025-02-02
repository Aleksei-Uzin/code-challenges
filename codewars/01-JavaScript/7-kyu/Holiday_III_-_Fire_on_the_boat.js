/**
 * Holiday III - Fire on the boat
 * https://www.codewars.com/kata/57e8fba2f11c647abc000944/train/javascript
 *
 */

const fireFight = str =>
  str
    .split(' ')
    .map((item, i, arr) => (item === 'Fire' ? (arr[i] = '~~') : (arr[i] = item)))
    .join(' ')
