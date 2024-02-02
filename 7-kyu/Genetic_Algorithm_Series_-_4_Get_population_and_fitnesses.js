/**
 * Genetic Algorithm Series - #4 Get population and fitnesses
 * https://www.codewars.com/kata/567b468357ed7411be00004a/train/javascript
 *
 */

const mapPopulationFit = (population, fitness) =>
  population.map(chromosome => ({
    fitness: fitness(chromosome),
    chromosome,
  }))
