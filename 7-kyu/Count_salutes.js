/**
 * Count salutes
 * https://www.codewars.com/kata/605ae9e1d2be8a0023b494ed/train/javascript
 *
 */

const countSalutes = (hallway, n = 0) => {
  if (!hallway.includes('>') || !hallway.includes('<')) return n

  n += (hallway.slice(hallway.indexOf('>')).match(/</g)?.length || 0) * 2

  return countSalutes(hallway.replace('>', '-'), n)
}
