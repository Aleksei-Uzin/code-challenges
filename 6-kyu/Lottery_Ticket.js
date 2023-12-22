/**
 * Lottery Ticket
 * https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript
 *
 */

const bingo = (ticket, win) => {
  const res = ticket.map(([str, num]) => {
    for (let c of str) {
      if (c.charCodeAt() === num) return 1
    }
    return 0
  })

  return res.reduce((acc, n) => acc + n, 0) >= win ? 'Winner!' : 'Loser!'
}
