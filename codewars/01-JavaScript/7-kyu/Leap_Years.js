/**
 * Leap Years
 * https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript
 *
 */

const isLeapYear = year => (!(year % 4) && year % 100 !== 0) || !(year % 400)
