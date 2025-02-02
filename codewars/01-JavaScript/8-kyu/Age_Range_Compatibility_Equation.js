/**
 * Age Range Compatibility Equation
 * https://www.codewars.com/kata/5803956ddb07c5c74200144e/train/javascript
 *
 */

const datingRange = age => {
  const floor = Math.floor
  let min, max

  if(age <= 14) {
    min = floor(age - 0.1 * age)
    max = floor(age + 0.1 * age)
  } else {
    min = floor(age / 2 + 7)
    max = floor((age - 7) * 2)
  }

  return `${min}-${max}`
}
