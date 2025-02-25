/**
 * Ka Ka Ka cypher - words only vol 1
 * https://www.codewars.com/kata/5934d648d95386bc8200010b/train/javascript
 *
 */

const kaCokadekaMe = word =>
  `ka${word.replace(/([aeiou]+)(?![aeiou]*$)/gi, '$1ka')}`
