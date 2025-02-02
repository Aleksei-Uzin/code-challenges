/**
 * Blood-Alcohol Content
 * https://www.codewars.com/kata/571b6a4a7beb0a8ade0007a8/train/javascript
 *
 */

function bloodAlcoholContent(drinks, weight, sex, time) {
  const ratio = sex === 'male' ? 0.73 : 0.66
  const {ounces, abv} = drinks
  
  const bac = (ounces * abv * 5.14 / weight * ratio) - 0.015 * time
  
  return Number(bac.toFixed(4))
}
