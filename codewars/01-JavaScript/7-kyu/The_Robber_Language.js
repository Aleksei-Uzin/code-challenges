/**
 * The Robber Language
 * https://www.codewars.com/kata/629e4d5f24b98110a83b2d0d/train/javascript
 *
 */

const robberEncode = str =>
  str.replace(
    /[bcdfghjklmnpqrstvwxyz]/gi,
    m => `${m}${m.toLowerCase() === m ? `o${m}` : `O${m}`}`
  )
