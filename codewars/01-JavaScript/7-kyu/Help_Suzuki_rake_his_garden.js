/**
 * Help Suzuki rake his garden!
 * https://www.codewars.com/kata/571c1e847beb0a8f8900153d/train/javascript
 *
 */

const rakeGarden = garden =>
  garden.replace(/\b\w+/g, m => (/\b(rock|gravel)\b/.test(m) ? m : 'gravel'))
