/**
 * Sum of a Beach
 * https://www.codewars.com/kata/5b37a50642b27ebf2e000010/train/javascript
 *
 */

const sumOfABeach = beach => (beach.match(/sand|water|fish|sun/gi) || []).length
