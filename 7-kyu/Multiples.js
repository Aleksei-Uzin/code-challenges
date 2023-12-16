/**
 * Multiples!
 * https://www.codewars.com/kata/55a8a36703fe4c45ed00005b/train/javascript
 *
 */

const multiple = num => {
  const isDivBy3 = num % 3 === 0
  const isDivBy5 = num % 5 === 0

  if (isDivBy3 && isDivBy5) return 'BangBoom'
  else if (isDivBy3) return 'Bang'
  else if (isDivBy5) return 'Boom'
  else return 'Miss'
}
