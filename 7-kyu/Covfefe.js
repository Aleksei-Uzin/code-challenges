/**
 * Covfefe
 * https://www.codewars.com/kata/592fd8f752ee71ac7e00008a/train/javascript
 *
 */

const covfefe = str =>
  /coverage/.test(str) ? str.replace(/coverage/g, 'covfefe') : `${str} covfefe`
