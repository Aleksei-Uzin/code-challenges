/**
 * Extract Values and Units
 * https://www.codewars.com/kata/55c0ee3b9951adceaa00005f/train/javascript
 *
 */

const valAndUnits = s => {
  const val = +s.replace(/[a-z\%]+/, '')
  const units = s.replace(/-?\d+\.?\d*\s*/, '')

  return { val, units }
}
