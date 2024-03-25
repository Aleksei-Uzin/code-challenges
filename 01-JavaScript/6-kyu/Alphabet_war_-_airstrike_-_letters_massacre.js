/**
 * Alphabet war - airstrike - letters massacre
 * https://www.codewars.com/kata/5938f5b606c3033f4700015a/train/javascript
 *
 */

const alphabetWar = fight => {
  const left = { s: 1, b: 2, p: 3, w: 4 }
  const right = { z: -1, d: -2, q: -3, m: -4 }
  const arr = fight.match(/(?<!\*)[sbpwzdqm](?!\*)/g) || []
  const res = arr.reduce((acc, l) => acc + (left[l] || right[l]), 0)

  return res !== 0
    ? `${res > 0 ? 'Left' : 'Right'} side wins!`
    : "Let's fight again!"
}
