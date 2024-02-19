/**
 * Multi-tap Keypad Text Entry on an Old Mobile Phone
 * https://www.codewars.com/kata/54a2e93b22d236498400134b/train/javascript
 *
 */

const keypad = [
  ['1'],
  ['A', 'B', 'C', '2'],
  ['D', 'E', 'F', '3'],
  ['G', 'H', 'I', '4'],
  ['J', 'K', 'L', '5'],
  ['M', 'N', 'O', '6'],
  ['P', 'Q', 'R', 'S', '7'],
  ['T', 'U', 'V', '8'],
  ['W', 'X', 'Y', 'Z', '9'],
  ['*'],
  [' ', '0'],
  ['#'],
]

const presses = phrase => {
  let count = 0

  for (let val of phrase.toUpperCase()) {
    keypad.forEach(button => {
      if (button.includes(val)) count += button.indexOf(val) + 1
    })
  }

  return count
}
