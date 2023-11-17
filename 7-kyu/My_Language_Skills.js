/**
 * My Language Skills
 * https://www.codewars.com/kata/5b16490986b6d336c900007d/train/javascript
 *
 */

const myLanguages = results =>
  Object.entries(results)
    .filter(([, score]) => score >= 60)
    .sort(([, a], [, b]) => b - a)
    .map(([lang]) => lang)
