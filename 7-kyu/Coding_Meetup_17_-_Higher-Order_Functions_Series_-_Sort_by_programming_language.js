/**
 * Coding Meetup #17 - Higher-Order Functions Series - Sort by programming language
 * https://www.codewars.com/kata/583ea278c68d96a5fd000abd/train/javascript
 *
 */

const compare = (a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 1
} 

const sortByLanguage = list => {
  return list.slice().sort((devA, devB) => {
    const { firstName: firstNameA, language: langA } = devA
    const { firstName: firstNameB, language: langB } = devB

    return langA !== langB ? compare(langA, langB) : compare(firstNameA, firstNameB)
  })
}
