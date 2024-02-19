/**
 * Alan Partridge III - London
 * https://www.codewars.com/kata/580a41b6d6df740d6100030c/train/javascript
 *
 */

const alan = x => {
  const stops = [
    'Rejection',
    'Disappointment',
    'Backstabbing Central',
    'Shattered Dreams Parkway',
  ]

  for (let stop of stops) {
    if (!x.includes(stop)) return 'No, seriously, run. You will miss it.'
  }

  return 'Smell my cheese you mother!'
}
