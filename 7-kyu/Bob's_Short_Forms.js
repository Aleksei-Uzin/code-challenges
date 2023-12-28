/**
 * Bob's Short Forms
 * https://www.codewars.com/kata/570cbe88f616a8f4f50011ac/train/javascript
 *
 */

const shortForm = str => str.replace(/(?!^|.$)[aeiou]/gi, '')
