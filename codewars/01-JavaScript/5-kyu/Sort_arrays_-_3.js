/**
 * Sort arrays - 3
 * https://www.codewars.com/kata/51f42b1de8f176db5a0002ae/train/javascript
 *
 * input: courses - array of course-names "name-yymm"
 * output: sorted by "yymm", then "name"
 *
 */

const sortme = courses =>
  courses.sort((a, b) => {
    const [nameA, yymmA] = a.split('-')
    const [nameB, yymmB] = b.split('-')

    return yymmA - yymmB || nameA.localeCompare(nameB)
  })
