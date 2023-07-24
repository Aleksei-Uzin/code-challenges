/**
 * Contamination #1 -String-
 * https://www.codewars.com/kata/596fba44963025c878000039/train/javascript
 *
 */

const contamination = (text, char) => {
  if(!text || !char) return ''
  
  return char.repeat(text.length)
}
