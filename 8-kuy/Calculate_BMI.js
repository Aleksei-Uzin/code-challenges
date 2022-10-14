/**
 * Calculate BMI
 * https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
 * 
 * Solution:
 * https://www.codewars.com/kata/57a429e253ba3381850000fb/solutions/javascript?filter=me&sort=best_practice&invalids=false
 * 
 */

function bmi(weight, height) {
  const bmi = weight / Math.pow(height, 2)

  if(bmi <= 18.5) {
    return 'Underweight'
  }

  if(bmi <= 25) {
    return 'Normal'
  }

  if(bmi <= 30) {
    return 'Overweight'
  }

  return 'Obese'
}
