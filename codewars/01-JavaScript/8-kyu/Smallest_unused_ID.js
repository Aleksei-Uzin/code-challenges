/**
 * Smallest unused ID
 * https://www.codewars.com/kata/55eea63119278d571d00006a/train/javascript
 *
 */

const nextId = ids => {
  const newIds = [...new Set(ids)].sort((a, b) => a - b)
  
  return (
    newIds.at(0) === 0
      ? newIds.find((x, i) => (x + 1) !== newIds.at(i + 1)) + 1
      : 0
  )
}

// Best practice
// function nextId(ids){
//   var x = 0
//   while (ids.includes(x)) x++
//   return x
// }
