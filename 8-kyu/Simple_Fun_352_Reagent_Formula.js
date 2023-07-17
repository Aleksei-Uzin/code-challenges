/**
 * Simple Fun #352: Reagent Formula
 * https://www.codewars.com/kata/59c8b38423dacc7d95000008/train/javascript
 *
 */

const isValid = formula => {
  const checkMaterials = func => (mat1, mat2) => func(mat1, mat2) || !(mat1 || mat2)
  const compare = arr => n => arr.some(x => x === n)
  const hasMaterials = (mat1, mat2) => mat1 && mat2
  const checkCondition3 = checkMaterials(hasMaterials)
  const hasMaterial = compare(formula)

  const condition1 = !hasMaterials(hasMaterial(1), hasMaterial(2))
  const condition2 = !hasMaterials(hasMaterial(3), hasMaterial(4))
  const condition3 = checkCondition3(hasMaterial(5), hasMaterial(6))
  const condition4 = !!(hasMaterial(7) || hasMaterial(8))

  return condition1 && condition2 && condition3 && condition4
}
