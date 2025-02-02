/**
 * The Office II - Boredom Score
 * https://www.codewars.com/kata/57ed4cef7b45ef8774000014/train/javascript
 *
 */

const boredomScore = {
  accounts: 1,
  finance: 2,
  canteen: 10,
  regulation: 3,
  trading: 6,
  change: 6,
  IS: 8,
  retail: 5,
  cleaning: 4,
  'pissing about': 25,
}

const boredom = staff => {
  const points = Object.values(staff).map(val => boredomScore[val])
  const sum = points.reduce((acc, val) => acc + val, 0)
  
  if(sum <= 80) return 'kill me now'
  if(sum > 80 && sum < 100) return 'i can handle this'

  return 'party time!!'
}
