/**
 * Caffeine Script
 * https://www.codewars.com/kata/5434283682b0fdb0420000e6/train/javascript
 *
 */

const caffeineBuzz = n => {
  const isDivByThree = n % 3 === 0
  const isDivByThreeAndFour = isDivByThree && n % 4 === 0
  const isEven = n % 2 === 0
  let res = ''

  if (isDivByThree) res = 'Java'
  if (isDivByThreeAndFour) res = 'Coffee'
  if ((isDivByThree && isEven) || (isDivByThreeAndFour && isEven))
    res += 'Script'

  return res || 'mocha_missing!'
}
