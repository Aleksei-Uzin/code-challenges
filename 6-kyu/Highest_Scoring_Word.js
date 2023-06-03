/**
 * Highest Scoring Word
 * https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
 *
 */

const high = x => {
  const abc = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const words = x.split(' ')
  let max = 0
  let res = ''
  
  words.forEach(word => {
    let sum = 0

    word.split('').forEach(char => sum += abc.findIndex(element => element === char))

    if(sum > max) {
      max = sum
      res = word
    }
  })

  return res
}

// Best Practice
//
// function high(s){
//   let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//   return s.split(' ')[as.indexOf(Math.max(...as))];
// }
