/**
 * Where is my parent!?(cry)
 * https://www.codewars.com/kata/58539230879867a8cd00011c/train/javascript
 *
 */

const findChildren = dancingBrigade =>
  [...dancingBrigade]
    .sort((a, b) =>
      a.toLowerCase() !== b.toLowerCase()
        ? a.localeCompare(b)
        : b.localeCompare(a)
    )
    .join('')
