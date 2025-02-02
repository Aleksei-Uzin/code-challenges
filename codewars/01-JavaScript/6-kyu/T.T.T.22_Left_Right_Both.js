/**
 * T.T.T.22: Left? Right? Both?
 * https://www.codewars.com/kata/57a8afa072292dccfe000270/train/javascript
 *
 */

const leftRightOrBoth = text => {
  if (/^\s*$/.test(text)) {
    return ''
  } else if (/^[1-5a-gq-tvwxz !@#$%]+$/i.test(text)) {
    return 'Left'
  } else if (/^[06-9h-nopuy ^&*();:,.'"<>?/]+$/i.test(text)) {
    return 'Right'
  } else {
    return 'Both'
  }
}
