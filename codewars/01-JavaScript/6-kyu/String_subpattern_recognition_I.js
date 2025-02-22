/**
 * String subpattern recognition I
 * https://www.codewars.com/kata/5a49f074b3bfa89b4c00002b/train/javascript
 *
 */

const hasSubpattern = str => /^(.*)\1+$/.test(str)
