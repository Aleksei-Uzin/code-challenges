/**
 * String insert values
 * https://www.codewars.com/kata/529b54d9aba78c924d00088e/train/javascript
 *
 */

const format = (str, obj) => {
  return str.replace(/\{\w+\}/g, match => {
    const prop = match.slice(1, -1)

    return Object.hasOwn(obj, prop) ? obj[prop] : match
  })
}
