/**
 * Flick Switch
 * https://www.codewars.com/kata/64fbfe2618692c2018ebbddb/train/javascript
 *
 */

const flickSwitch = arr => {
  let flick = true

  return arr.map(val => {
    if (val === 'flick') flick = !flick
    return flick
  })
}
