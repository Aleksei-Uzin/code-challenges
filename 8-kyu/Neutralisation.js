/**
 * Neutralisation
 * https://www.codewars.com/kata/65128732b5aff40032a3d8f0/train/javascript
 *
 */

const neutralise = (s1, s2) => {
  let res = ''

  for (let i = 0; i < s1.length; i++) {
    s1[i] === s2[i] ? (res += s1[i]) : (res += 0)
  }

  return res
}
