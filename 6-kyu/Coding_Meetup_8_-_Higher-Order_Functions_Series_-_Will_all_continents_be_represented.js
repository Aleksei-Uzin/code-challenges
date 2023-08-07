/**
 * Coding Meetup #8 - Higher-Order Functions Series - Will all continents be represented?
 * https://www.codewars.com/kata/58291fea7ff3f640980000f9/train/javascript
 *
 */

const allContinents = list => {
  const continents = {
    Africa: 0,
    Americas: 0,
    Asia: 0,
    Europe: 0,
    Oceania: 0,
  }
  
  list.forEach(({ continent }) => continents[continent] += 1)
  
  return !Object.values(continents).includes(0)
}
