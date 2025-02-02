/**
 * Exclamation marks series #9: Remove or add a exclamation mark at the end of words of the sentence
 * https://www.codewars.com/kata/57fb017d9610ce369a0006ac/train/javascript
 *
 */

const removeOrAdd = str =>
  str.replace(/\b\!{1}(?!\!)|\w\b(?!\!)/g, match =>
    match !== '!' ? `${match}!` : ''
  )
