/**
 * Pull your words together, man!
 * https://www.codewars.com/kata/59ad7d2e07157af687000070/train/javascript
 *
 */

const sentencify = words =>
  `${words.join(' ').replace(/^[a-z]/, m => m.toUpperCase())}.`
