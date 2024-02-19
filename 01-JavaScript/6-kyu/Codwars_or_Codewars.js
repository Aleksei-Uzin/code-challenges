/**
 * Codwars or Codewars?
 * https://www.codewars.com/kata/5967a67c8b0fc0093e000062/train/javascript
 *
 */

const findCodwars = str =>
  !/(subdomain\.codewars)|(codewars.com)(?=\?)|(com\.com)|\bcomp\b|(\.com[^\/]$)/.test(
    str
  )
    ? str.split('com').some(url => /\bcodwars\.$/.test(url))
    : false
