/**
 * Pig Sursurunga
 * https://www.codewars.com/kata/5536aba6e4609cc6a600003d/train/javascript
 *
 */

const sursurungal = txt =>
  txt
    .replace(/(\b2\s)([a-z]+)s/g, (_, n1, n2) => `${n1}bu${n2}`)
    .replace(/(\b[3-9]\s[a-z]+)s/g, (_, n1) => `${n1}zo`)
    .replace(/(\d{2}\s)([a-z]+)s/g, (_, n1, n2) => `${n1}ga${n2}ga`)
