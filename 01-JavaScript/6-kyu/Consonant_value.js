/**
 * Consonant value
 * https://www.codewars.com/kata/59c633e7dcc4053512000073/train/javascript
 *
 */

const solve = s => {
  const consonants = s.match(/[^aeiou]+/g)
  let res = 0

  consonants.forEach(val => {
    let sum = 0
    if(val.length > 1) {
      sum = val.split('').reduce((acc, l) => acc += l.charCodeAt(0) % 96, 0)
    } else {
      sum = val.charCodeAt(0) % 96
    }

    res = sum > res ? sum : res
  })

  return res
}
