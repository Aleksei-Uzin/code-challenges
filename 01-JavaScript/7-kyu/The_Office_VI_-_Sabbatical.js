/**
 * The Office VI - Sabbatical
 * https://www.codewars.com/kata/57fe50d000d05166720000b1/train/javascript
 *
 */

const sabb = (s, val, happiness) => {
  const total = s.match(/[abcilst]/g)
  const sum = total ? total.length + val + happiness : val + happiness

  return sum > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}
