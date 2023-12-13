/**
 * What will be the odd one out?
 * https://www.codewars.com/kata/55b080eabb080cd6f8000035/train/javascript
 *
 */

const oddOneOut = str => {
  const set = new Set()

  for (let elem of str) {
    set.has(elem) ? set.delete(elem) : set.add(elem)
  }

  return Array.from(set)
}
