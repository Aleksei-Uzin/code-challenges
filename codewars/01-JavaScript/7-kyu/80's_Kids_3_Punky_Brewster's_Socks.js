/**
 * 80's Kids #3: Punky Brewster's Socks
 * https://www.codewars.com/kata/5662292ee7e2da24e900012f/train/javascript
 *
 */

const getSocks = (name, socks) => {
  if (name === 'Punky') {
    const sockA = socks[0]
    const sockB = socks.find(sock => sockA !== sock)
    return sockA && sockB ? [sockA, sockB] : []
  } else {
    return socks.filter(sock => socks.indexOf(sock) !== socks.lastIndexOf(sock))
  }
}
