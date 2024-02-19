/**
 * Sort the climbing grades
 * https://www.codewars.com/kata/58a08e622e7fb654a300000e/train/javascript
 *
 */

// A
const sortGrades = lst => {
  const grades = 'VBV0V0+V1V2V3V4V5V6V7V8V9V10V11V12V13V14V15V16V17'

  return lst.sort((a, b) => grades.indexOf(a) - grades.indexOf(b))
}

// B
const _sortGrades = lst =>
  lst.sort((...grades) => {
    const [a, b] = grades.map(grade => {
      switch (grade) {
        case 'VB':
          return 0
        case 'V0':
          return 1
        default:
          return parseInt(grade.match(/\d+/)) + 2
      }
    })

    return a - b
  })
