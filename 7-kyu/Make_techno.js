/**
 * Make techno
 * https://www.codewars.com/kata/563c8540d50eb20bab00009a/train/javascript
 *
 */

const perc = mins => {
  if (typeof mins !== 'number' || mins < 1 || mins > 100)
    return 'invalid track time'

  const beats = mins * 30
  const kicks = `${Math.round(beats * 4)} kicks`
  const hihats = `${Math.round(beats * 8)} hihats`
  const claps = `${Math.round(beats * 2)} claps`

  return [kicks, hihats, claps]
}
