/**
 * Likes Vs Dislikes
 * https://www.codewars.com/kata/62ad72443809a4006998218a/train/javascript
 *
 */

const likeOrDislike = buttons => {
  let res = 'Nothing'
  
  buttons.forEach(x => {
    res !== x ? res = x : res = 'Nothing'
  })

  return res
}
