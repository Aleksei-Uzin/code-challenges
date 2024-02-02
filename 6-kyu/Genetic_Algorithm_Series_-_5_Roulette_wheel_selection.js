/**
 * Genetic Algorithm Series - #5 Roulette wheel selection
 * https://www.codewars.com/kata/567b21565ffbdb30e3000010/train/javascript
 *
 */

const select = (population, fitnesses) => {
  const probability = []

  fitnesses.forEach((n, i, arr) => {
    probability.push(i > 0 ? n + probability[i - 1] : n)
  })

  for (let i = 0; i < population.length; i++) {
    if (Math.random() <= probability[i]) return population[i]
  }
}
