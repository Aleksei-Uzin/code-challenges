/**
 * Simple Fun #28: Html End Tag By Start Tag
 * https://www.codewars.com/kata/5886f3713a111b620f0000dc/train/javascript
 *
 */

const htmlEndTagByStartTag = startTag => {
  const [tag] = startTag.match(/\w+/) || []

  return `</${tag}>`
}
