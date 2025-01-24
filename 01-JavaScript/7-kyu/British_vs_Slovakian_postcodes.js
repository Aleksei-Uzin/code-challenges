/**
 * British vs Slovakian postcodes
 * https://www.codewars.com/kata/664e4f5b12b1b20182ea3e3a/train/javascript
 *
 */

const whichPostcode = postcode => {
  if (/^\s*[a-z]{1,2}\d{1,2}\s\d[a-z]{2}\s*$/i.test(postcode)) return 'GB'
  else if (/^\s*\d{3}\s\d{2}\s*$/.test(postcode)) return 'SK'
  else return 'Not valid'
}
