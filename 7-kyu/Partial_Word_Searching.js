/**
 * Partial Word Searching
 * https://www.codewars.com/kata/54b81566cd7f51408300022d/train/javascript
 *
 */

const wordSearch = (query, seq) => {
  const res = []

  for (let val of seq) {
    if (new RegExp(query, 'i').test(val)) res.push(val)
  }

  return res.length > 0 ? res : ['Empty']
}
