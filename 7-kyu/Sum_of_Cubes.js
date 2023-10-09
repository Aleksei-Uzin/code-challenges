/**
 * Sum of Cubes
 * https://www.codewars.com/kata/59a8570b570190d313000037/train/javascript
 *
 */

const sumCubes = n => (n !== 0 ? sumCubes(n - 1) + n ** 3 : 0)
