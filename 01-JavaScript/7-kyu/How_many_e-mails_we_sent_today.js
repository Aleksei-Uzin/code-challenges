/**
 * How many e-mails we sent today?
 * https://www.codewars.com/kata/58a369fa5b3daf464200006c/train/javascript
 *
 */

const getPercentage = (sent, limit = 1000) => {
  const res = sent / (limit * 0.01)

  return !res
    ? 'No e-mails sent'
    : res < 100
    ? `${~~res}%`
    : 'Daily limit is reached'
}
