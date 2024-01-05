/**
 * Training JS #35: methods of Math---log() and its family
 * https://www.codewars.com/kata/57353de879ccaeb9f8000564/train/javascript
 *
 */

const thinkingAndTesting = (number, base) =>
  number - base ** ~~(Math.log(number) / Math.log(base))
