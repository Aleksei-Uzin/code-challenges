/**
 * Find Cracker.
 * https://www.codewars.com/kata/59f70440bee845599c000085/train/javascript
 *
 */

const findHack = arr => {
  const score = { A: 30, B: 20, C: 10, D: 5 }
  const names = []
  
  arr.forEach(subArr => {
    const [name, points, grades] = subArr
    const moreCourses = grades.length >= 5
    const hasGoodPoints = !(grades.filter(x => x !== 'A' && x !== 'B').length)
    const hasAward = moreCourses && hasGoodPoints
    let res = hasAward ? 20 : 0
    
    if(points > 200) return names.push(name)
    
    grades.forEach(grade => {
      if(score[grade]) res += score[grade]
    })
    
    if(points !== res) names.push(name)
  })
  
  return names
}
