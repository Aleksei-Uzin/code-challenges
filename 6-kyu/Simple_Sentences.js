/**
 * Simple Sentences
 * https://www.codewars.com/kata/5297bf69649be865e6000922/train/javascript
 *
 */

const makeSentence = parts =>
  parts
    .join(' ')
    .replace(/\s*(?=(,|\.))/g, '')
    .replace(/\w\.*$/, m => `${m.slice(0, 1)}.`)
