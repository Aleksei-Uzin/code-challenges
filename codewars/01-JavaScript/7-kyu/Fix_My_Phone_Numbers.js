/**
 * Fix My Phone Numbers!
 * https://www.codewars.com/kata/596343a24489a8b2a00000a2/train/javascript
 *
 */

const isItANum = str =>
  /^\D*0(\D*\d){10}\D*$/.test(str)
    ? str.replace(/\D/g, '')
    : 'Not a phone number'
