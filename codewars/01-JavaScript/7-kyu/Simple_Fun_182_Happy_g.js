/**
 * Simple Fun #182: Happy "g"
 * https://www.codewars.com/kata/58bcd27b7288983803000002/train/javascript
 *
 */

const gHappy = str => !/g/g.test(str.replace(/g{2,}/g, ''))
