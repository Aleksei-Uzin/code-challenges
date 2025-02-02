/**
 * Training JS #5: Basic data types--Object
 * https://www.codewars.com/kata/571f1eb77e8954a812000837/train/javascript
 *
 */

const animal = obj => {
  const {name, legs, color} = obj

  return `This ${color} ${name} has ${legs} legs.`
}
