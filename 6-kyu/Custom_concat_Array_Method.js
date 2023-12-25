/**
 * Custom concat() Array Method
 * https://www.codewars.com/kata/583579afe0c61a774a0000ba/train/javascript
 *
 */

Array.prototype.customConcat = function (...args) {
  const copy = [...this]

  for (let item of args) copy.push(...item)

  return copy
}
