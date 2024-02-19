/**
 * Categorize New Member
 * https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript
 *
 */

const openOrSenior = data => data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? 'Senior' : 'Open')

// Just to test the recursion method
function openOrSenior(data, res = []) {  
  if(data.length === 0) {
    return res
  } else {
    const [age, handicap]  = data.shift()

    if(age >= 55 && handicap > 7) {
      res.push('Senior')
    } else {
      res.push('Open')
    }

    return openOrSenior(data, res)
  }
}
