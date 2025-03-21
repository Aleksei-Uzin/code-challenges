/**
 * Ce*s*r*d Strings
 * https://www.codewars.com/kata/5ff6060ed14f4100106d8e6f/train/javascript
 *
 */

const uncensor = (infected, discovered) => {
  for (let c of discovered) {
    infected = infected.replace(/\*/, c)
  }

  return infected
}
