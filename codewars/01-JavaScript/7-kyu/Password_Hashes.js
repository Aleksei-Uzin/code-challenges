/**
 * Password Hashes
 * https://www.codewars.com/kata/54207f9677730acd490000d1/train/javascript
 *
 */

const { createHash } = require('node:crypto')
const passHash = str => createHash('md5').update(str).digest('hex')
