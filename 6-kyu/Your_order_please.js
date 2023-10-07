/**
 * Your order, please
 * https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
 *
 */

const order = words => {
  let res = []

  words.split(" ").forEach(word => {
    const index = word.search(/\d/)
    res[word[index] - 1] = word
  })

  return res.join(" ")
}
