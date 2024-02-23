/**
 * Hide password from jdbc url
 * https://www.codewars.com/kata/5a726f16373c2ee6c60000db/train/javascript
 *
 */

const hidePasswordFromConnection = url =>
  url.replace(/(?<=password\=)[^&]+/, pass => '*'.repeat(pass.length))
