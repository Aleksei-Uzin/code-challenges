/**
 * RoboScript #1 - Implement Syntax Highlighting
 * https://www.codewars.com/kata/58708934a44cfccca60000c4/train/javascript
 *
 */

const highlight = code => {
  const tokens = code.match(/([flr])\1*|\d+|([\(\)])+/gi) || []
  let res = ''

  for (let token of tokens) {
    if (/^f+$/i.test(token)) {
      res += `<span style="color: pink">${token}</span>`
    } else if (/^l+$/i.test(token)) {
      res += `<span style="color: red">${token}</span>`
    } else if (/^r+$/i.test(token)) {
      res += `<span style="color: green">${token}</span>`
    } else if (/^\d+$/i.test(token)) {
      res += `<span style="color: orange">${token}</span>`
    } else {
      res += token
    }
  }

  return res
}
