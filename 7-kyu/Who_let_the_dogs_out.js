/**
 * Who let the dogs out?
 * https://www.codewars.com/kata/5434d8487abffa2f64000db6/train/javascript
 *
 */

const BARK = 'woof woof'
const SLEEP = 'zzzzzzzzz....'

function dog_bark_by_default(bark = true) {
  return bark ? BARK : SLEEP
}

function dog_bark_only_if_told_so(bark) {
  return bark ? BARK : SLEEP
}

function dog_dont_bark_by_default(dont_bark = true) {
  return !dont_bark ? BARK : SLEEP
}

function dog_dont_bark_only_if_told_so(dont_bark) {
  return !dont_bark ? BARK : SLEEP
}
