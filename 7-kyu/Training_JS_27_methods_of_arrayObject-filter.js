/**
 * Training JS #27: methods of arrayObject---filter()
 * https://www.codewars.com/kata/573023c81add650b84000429/train/javascript
 *
 */

const countGrade = scores => {
  const grades = [
    { S: [100, 100] },
    { A: [99, 90] },
    { B: [89, 80] },
    { C: [79, 60] },
    { D: [59, 0] },
    { X: [-1, -1] },
  ]
  const res = {}

  for (let grade of grades) {
    const [key] = Object.keys(grade)
    const [a, b] = grade[key]
    const count = scores.filter(val => val <= a && val >= b).length
    res[key] = count
  }

  return res
}
