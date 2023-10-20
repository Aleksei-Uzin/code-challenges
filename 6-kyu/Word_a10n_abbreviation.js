/**
 * Word a10n (abbreviation)
 * https://www.codewars.com/kata/5375f921003bf62192000746/train/javascript
 *
 */

const abbreviate = str =>
  str.replace(/\b[a-z]{4,}/gi, word =>
    word.replace(/(?!(^\w))\w+(?=\w)/, word.length - 2)
  )
