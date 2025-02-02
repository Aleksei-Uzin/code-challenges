/**
 * Genetic Algorithm Series - #2 Mutation
 * https://www.codewars.com/kata/567b39b27d0a4606a5000057/train/javascript
 *
 */

const mutate = (chromosome, p) =>
  chromosome.replace(/./g, m => (Math.random() < p ? Number(!Number(m)) : m))
