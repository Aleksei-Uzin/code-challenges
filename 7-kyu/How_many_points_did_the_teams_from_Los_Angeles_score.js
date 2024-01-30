/**
 * How many points did the teams from Los Angeles score?
 * https://www.codewars.com/kata/580559b17ab3396c58000abb/train/javascript
 *
 */

const getLosAngelesPoints = results => {
  let sum = 0

  for (let [team, score] of results) {
    if (/^Los Angeles [A-Z][a-z]+$/.test(team)) {
      sum += Number.parseInt(score.replace(/:\d+/, ''))
    }
  }

  return sum
}
