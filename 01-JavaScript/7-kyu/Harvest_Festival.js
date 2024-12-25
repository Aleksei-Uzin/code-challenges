/**
 * Harvest Festival
 * https://www.codewars.com/kata/606efc6a9409580033837dfb/train/javascript
 *
 */

const plant = (seed, water, fert, temp) => {
  const stem = '-'.repeat(water)

  return temp >= 20 && temp <= 30
    ? `${stem}${seed.repeat(fert)}`.repeat(water)
    : `${stem.repeat(water)}${seed}`
}
