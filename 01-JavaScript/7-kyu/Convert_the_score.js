/**
 * Convert the score
 * https://www.codewars.com/kata/5b6c220fa0a661fbf200005d/train/javascript
 *
 */

const scoreboard = str => {
  const score = [
    'nil',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ]

  score.forEach((val, i) => {
    str = str.replace(new RegExp(val, 'g'), i)
  })

  return str.match(/\d/g).map(Number)
}
