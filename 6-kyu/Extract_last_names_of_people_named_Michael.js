/**
 * Extract last names of people named Michael
 * https://www.codewars.com/kata/580741302e14acaef900015a/train/javascript
 *
 */

const getMichaelLastName = inputText =>
  inputText.match(/(?<=Michael\s)\b[A-Z][a-z]+\b/g)
