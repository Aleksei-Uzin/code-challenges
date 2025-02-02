/**
 * Deutschstunde
 * https://www.codewars.com/kata/552cd8624a414ec2b2000086/train/javascript
 *
 */

const derDieDas = wort => {
  const vowels = wort.match(/[aeiouäöü]/gi) || []
  const count = vowels.length

  if (count > 3) return `der ${wort}`
  if (count > 1) return `die ${wort}`
  else return `das ${wort}`
}
