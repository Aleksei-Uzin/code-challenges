/**
 * Format of a ticket number
 * https://www.codewars.com/kata/564717d6e94d5d6b21000066/train/javascript
 *
 */

const nbrValidTickets = tickets =>
  tickets.filter(val => /^[a-z]\d[a-z]{4}$/i.test(val)).length
