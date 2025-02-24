/**
 * Make the small words big!
 * https://www.codewars.com/kata/57b4dd38d2a31c75f7000299/train/javascript
 *
 */

const smallWordHelper = sentence =>
  sentence
    .split(' ')
    .map(word =>
      /^[\w']{1,3}\W*$/.test(word)
        ? word.toUpperCase()
        : word.replace(/[aeiou]/gi, '')
    )
    .join(' ')
