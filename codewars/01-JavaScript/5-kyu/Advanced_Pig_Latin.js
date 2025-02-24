/**
 * Advanced Pig Latin
 * https://www.codewars.com/kata/533c46b140aafec05b000d31/train/javascript
 *
 */

const translate = sent =>
  sent.replace(/\b[a-z]+\b/gi, word => {
    if (/^[aeiou]/i.test(word)) {
      return `${word}way`
    } else {
      return word.replace(/\b([^aeiou]+)(\w*)\b/g, (_, m1, m2) => {
        if (m2 && /[A-Z]/.test(m1)) {
          m1 = m1.toLowerCase()
          m2 = m2.replace(/\w/, m => m.toUpperCase())
        }
        return `${m2}${m1}ay`
      })
    }
  })
