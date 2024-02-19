/**
 * Filter out the geese
 * https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7/train/javascript
 *
 */

function gooseFilter (birds) {
  const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  const arr = []

  birds.forEach(bird => {
    const isThatGoose = geese.some(goose => goose === bird)

    !isThatGoose && arr.push(bird)
  })

  return arr
}

// Best Practice
//
// function gooseFilter (birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   return birds.filter(b => !geese.includes(b));
// }
