/**
 * What is my name score? #1
 * https://www.codewars.com/kata/576a29ab726f4bba4b000bb1/train/javascript
 *
 */

const nameScore = name => {
  const keys = Object.keys(alpha)
  let sum = 0

  for (let c of name) {
    const key = keys.find(val => new RegExp(c, 'i').test(val))
    if (key) sum += alpha[key]
  }

  return { [name]: sum }
}
