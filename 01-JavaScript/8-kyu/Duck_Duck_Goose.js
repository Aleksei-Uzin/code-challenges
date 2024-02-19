/**
 * Duck Duck Goose
 * https://www.codewars.com/kata/582e0e592029ea10530009ce/train/javascript
 *
 */

function duckDuckGoose(players, goose) {
  const len = players.length
  const i = --goose % len

  return players[i].name
}
