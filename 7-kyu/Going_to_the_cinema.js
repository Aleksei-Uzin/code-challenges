/**
 * Going to the cinema
 * https://www.codewars.com/kata/562f91ff6a8b77dfe900006e/train/javascript
 *
 */

const movie = (card, ticket, perc) => {
  let n = 0

  for (let ticketSum = 0; Math.ceil(card) >= ticketSum; ticketSum += ticket) {
    n++
    card += ticket * perc ** n
  }

  return n
}
