/**
 * Strong Number (Special Numbers Series #2)
 * https://www.codewars.com/kata/5a4d303f880385399b000001/train/javascript
 *
 */

const fact = n => (n == 0 ? 1 : n * fact(n - 1))
const strong = n => {
  const str = n.toString()
  let sum = 0

  for (let i = 0; i < str.length; i++) {
    sum += fact(Number(str[i]))
  }

  return sum === n ? 'STRONG!!!!' : 'Not Strong !!'
}
