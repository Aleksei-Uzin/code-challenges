/**
 * Javascript filter - 2
 * https://www.codewars.com/kata/5262fa26875ed24a3e000029/train/javascript
 *
 */

const roomMates = (rooms, floor) =>
  rooms.filter((val, i) => val && ~~(i / 6) === floor - 1)
