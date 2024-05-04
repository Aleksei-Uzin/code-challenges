/**
 * Vampire Numbers
 * https://www.codewars.com/kata/54d418bd099d650fa000032d/train/javascript
 *
 */

const vampireTest = (a, b) => {
  const s1 = [...`${a}${b}`].sort().toString()
  const s2 = [...`${a * b}`].sort().toString()

  return s1 === s2
}
