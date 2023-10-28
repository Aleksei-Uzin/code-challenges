/**
 * SillyCASE
 * https://www.codewars.com/kata/552ab0a4db0236ff1a00017a/train/javascript
 *
 */

const sillycase = silly => {
  const mid = Math.ceil(silly.length / 2)

  return silly.slice(0, mid).toLowerCase() + silly.slice(mid).toUpperCase()
}
