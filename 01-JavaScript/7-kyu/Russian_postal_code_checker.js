/**
 * Russian postal code checker
 * https://www.codewars.com/kata/552e45cc30b0dbd01100001a/train/javascript
 *
 */

const zipvalidate = postcode => /^[12346]\d{5}$/.test(postcode)
