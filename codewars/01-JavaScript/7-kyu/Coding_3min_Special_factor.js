/**
 * Coding 3min : Special factor
 * https://www.codewars.com/kata/570e5d0b93214b1a950015b1/train/javascript
 *
 */

const sc = n => {
  const factors = []

  for (let i = 1; i <= n; i++) {
    !(n % i) && factors.push(i)
  }

  return factors.filter(v => n.toString(2).includes(v.toString(2)))
}
