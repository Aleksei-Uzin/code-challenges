/**
 * Who is the killer?
 * https://www.codewars.com/kata/5f709c8fb0d88300292a7a9d/train/javascript
 *
 */

const killer = (suspectInfo, dead) => {
  for (let [key, arr] of Object.entries(suspectInfo)) {
    let isKiller = true

    for (let name of dead) {
      if (!arr.includes(name)) {
        isKiller = false
        break
      }
    }

    if (isKiller) return key
  }
}

// Best practice
//
// function killer(suspectInfo, dead) {
//   return Object.keys(suspectInfo).find(x =>
//     dead.every(y => suspectInfo[x].includes(y))
//   )
// }
