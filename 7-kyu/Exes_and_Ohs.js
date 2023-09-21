/**
 * Exes and Ohs
 * https://www.codewars.com/kata/55908aad6620c066bc00002a/train/javascript
 *
 */

const XO = str => {
  const { x, o } = [...str.toLowerCase()].reduce((acc, val) => {
    if(val === 'x' || val === 'o') {
      acc[val] += 1
    }

    return acc
  }, { x: 0, o: 0 })
  
  return x === o
}

// Best Practice
//
// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }
