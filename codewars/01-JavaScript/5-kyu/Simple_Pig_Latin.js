/**
 * Simple Pig Latin
 * https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript
 *
 */

const pigIt = str => str.replace(/\b(\w)(\w*)/g, '$2$1ay')
