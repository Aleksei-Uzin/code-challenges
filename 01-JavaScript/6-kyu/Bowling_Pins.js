/**
 * Bowling Pins
 * https://www.codewars.com/kata/585cf93f6ad5e0d9bf000010/train/javascript
 *
 */

const bowlingPins = arr => {
  const pins = '7 8 9 10\n 4 5 6 \n  2 3  \n   1   '
  return pins.replace(/\d+/g, n => (arr.includes(+n) ? ' ' : 'I'))
}
