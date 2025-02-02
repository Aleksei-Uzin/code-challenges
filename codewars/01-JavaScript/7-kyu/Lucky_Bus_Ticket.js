/**
 * Lucky Bus Ticket
 * https://www.codewars.com/kata/58902f676f4873338700011f/train/javascript
 *
 */

const isLucky = ticket => {
  if (!/^\d{6}$/.test(ticket)) return false

  return ![...ticket]
    .map(Number)
    .reduce((s, n, i) => (i < 3 ? s + n : s - n), 0)
}
