/**
 * Exclamation marks series #18: a simple slot machine that only contains exclamation marks and question marks
 * https://www.codewars.com/kata/57fb4b289610ce39f70000de/train/javascript
 *
 */

const slot = s => {
  if (/^(.)\1+$/.test(s)) return 1000
  else if (/(.)\1{3}/.test(s)) return 800
  else if (/^((\!{2,3}|\?{2,3})){2}$/.test(s)) return 500
  else if (/(.)\1{2}/.test(s)) return 300
  else if (/^(?=(.*(\!\!|\?\?)){2})[!?]{5}$/.test(s)) return 200
  else if (/(.)\1/.test(s)) return 100
  else return 0
}
