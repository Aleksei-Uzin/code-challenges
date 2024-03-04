/**
 * Emotional Sort ( ︶︿︶)
 * https://www.codewars.com/kata/5a86073fb17101e453000258/train/javascript
 *
 */

const sortEmotions = (arr, order) => {
  const emotions = [':D', ':)', ':|', ':(', 'T_T']

  return order ? sort(arr, emotions) : sort(arr, emotions.reverse())
}
const sort = (arr, emotions) =>
  arr.sort((a, b) => emotions.indexOf(a) - emotions.indexOf(b))
