/**
 * PopShift
 * https://www.codewars.com/kata/57cec34272f983e17800001e/train/javascript
 *
 */

const popShift = s => {
  let str1 = ''
  let str2 = ''

  while (s.length > 1) {
    s = s
      .replace(/^./, m => ((str2 += m), ''))
      .replace(/.$/, m => ((str1 += m), ''))
  }

  return [str1, str2, s]
}
