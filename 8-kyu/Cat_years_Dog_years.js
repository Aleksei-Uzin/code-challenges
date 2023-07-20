/**
 * Cat years, Dog years
 * https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b/train/javascript
 *
 */

const humanYearsCatYearsDogYears = humanYears => {
  let catYears = 0
  let dogTears = 0
  
  for(let i = 1; i <= humanYears; i++) {
    if(i === 1) {
      catYears += 15
      dogTears += 15
    }
    
    if(i === 2) {
      catYears += 9
      dogTears += 9
    }
    
    if(i > 2) {
      catYears += 4
      dogTears += 5
    }
  }
  
  return [humanYears, catYears, dogTears]
}
