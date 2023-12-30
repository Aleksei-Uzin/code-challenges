/**
 * Extract the contents of a given tag from the HTML document
 * https://www.codewars.com/kata/5808ce703e55743db7000d92/train/javascript
 *
 */

const getTagContent = (htmlString, tag) => {
  const reg = new RegExp(`(?<=<${tag}\\s*.*>)\\s*.+\\s*(?=<\\/${tag}>)`, 'gm')

  return (htmlString.match(reg) || []).map(val => val.trim())
}
