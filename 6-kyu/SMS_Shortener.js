/**
 * SMS Shortener
 * https://www.codewars.com/kata/535a69fb36973f2aad000953/train/javascript
 *
 */

const shortener = message => {
  if (message.length <= 160 || !message.includes(' ')) return message

  message = message.replace(/(\s+)(.)(?=\S+$)/, (m, p1, p2) => p2.toUpperCase())

  return shortener(message)
}
