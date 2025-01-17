/**
 * Node.js Intro
 * https://www.codewars.com/kata/541db50c259d9c55c00007b9/train/javascript
 *
 */

const { Buffer } = require('node:buffer')

String.prototype.toBase64 = function () {
  return Buffer.from(this).toString('base64')
}

String.prototype.fromBase64 = function () {
  return Buffer.from(this, 'base64').toString('utf8')
}
