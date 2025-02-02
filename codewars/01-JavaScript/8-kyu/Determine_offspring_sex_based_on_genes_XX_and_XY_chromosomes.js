/**
 * Determine offspring sex based on genes XX and XY chromosomes
 * https://www.codewars.com/kata/56530b444e831334c0000020/train/javascript
 *
 */

const chromosomeCheck = sperm => {
  const child = sperm.includes('Y') ? 'son' : 'daughter'

  return `Congratulations! You're going to have a ${child}.`
}
