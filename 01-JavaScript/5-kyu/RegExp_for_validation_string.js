/**
 * RegExp for validation string
 * https://www.codewars.com/kata/58f1419b03388b4d45000081/train/javascript
 *
 */

let reg =
  /^(?=([a-z].*,){2})(?=.*(name:[a-z]+,?))(?=.*(skill:[a-z]+,?))(?=.*(age:\d+,?)).*(?=[a-z\d]+$)/i

// Best practice
//
// let reg = /^(?!,)(?=.*name:[a-z]+)(?=.*age:\d+)(?=.*skill:[a-z])(?=(.*,){2}.*\w$)/i
