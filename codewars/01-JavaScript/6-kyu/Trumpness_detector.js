/**
 * Trumpness detector
 * https://www.codewars.com/kata/57829376a1b8d576640000d6/train/javascript
 *
 */

const trumpDetector = trumpySpeech => {
  const vowels = trumpySpeech.match(/([aeiou])\1*/gi) || []
  const sum = vowels.reduce((acc, s) => acc + s.length - 1, 0)

  return +(sum / vowels.length).toFixed(2)
}
