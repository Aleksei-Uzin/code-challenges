/**
 * How old will I be in 2099?
 * https://www.codewars.com/kata/5761a717780f8950ce001473/train/javascript
 *
 */

const calculateAge = (year1, year2) => {
  const getS = year => year !== 1 ? 's' : ''
  
  if(year1 < year2) return `You are ${year2 - year1} year${getS(year2 - year1)} old.`

  if(year1 > year2) return `You will be born in ${year1 - year2} year${getS(year1 - year2)}.`
  
  return 'You were born this very year!'
}
