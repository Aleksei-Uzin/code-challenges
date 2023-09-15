/**
 * The Office I - Outed
 * https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1/train/javascript
 *
 */

const outed = (meet, boss) => {  
  const optimizedMeet = meet[boss] ? { ...meet, [boss]: meet[boss] * 2 } : meet
  const ratings = Object.values(optimizedMeet)
  const sum = ratings.reduce((acc, val) => acc + val, 0)
  
  return sum / ratings.length <= 5 ? 'Get Out Now!' : 'Nice Work Champ!'
}
