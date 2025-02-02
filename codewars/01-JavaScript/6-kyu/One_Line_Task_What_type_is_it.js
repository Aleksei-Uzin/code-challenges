/**
 * One Line Task: What type is it?
 * https://www.codewars.com/kata/62ffe08f211df800364b8ad1/train/javascript
 *
 */

f = x => ({}.toString.call(x).slice(8, -1))
