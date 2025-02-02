/**
 * Genetic Algorithm Series - #3 Crossover
 * https://www.codewars.com/kata/567d71b93f8a50f461000019/train/javascript
 *
 */

const crossover = (chromosome1, chromosome2, index) => {
  const tail1 = chromosome1.slice(index)
  const tail2 = chromosome2.slice(index)
  const re = new RegExp('(\\d{' + index + '})(\\d+)')

  return [
    chromosome1.replace(re, '$1' + tail2),
    chromosome2.replace(re, '$1' + tail1),
  ]
}
