/**
 * Disarium Number (Special Numbers Series #3)
 * https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/train/javascript
 *
 */

const disariumNumber = n => {
  const str = n.toString()
  let res = 0

  for (let i = 1; i <= str.length; i++) {
    res += Number(str[i - 1]) ** i
  }

  return res === n ? 'Disarium !!' : 'Not !!'
}
