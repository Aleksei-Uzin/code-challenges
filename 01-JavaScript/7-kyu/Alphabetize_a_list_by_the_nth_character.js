/**
 * Alphabetize a list by the nth character
 * https://www.codewars.com/kata/54eea36b7f914221eb000e2f/train/javascript
 *
 */

const sortIt = (list, n) =>
  list
    .split(', ')
    .sort((a, b) => {
      const codeA = a.toLowerCase().charCodeAt(n - 1)
      const codeB = b.toLowerCase().charCodeAt(n - 1)

      return codeA === codeB ? a.localeCompare(b) : codeA - codeB
    })
    .join(', ')
