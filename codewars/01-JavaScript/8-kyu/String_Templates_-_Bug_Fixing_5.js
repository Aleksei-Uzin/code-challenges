/**
 * String Templates - Bug Fixing #5
 * https://www.codewars.com/kata/55c90cad4b0fe31a7200001f/train/javascript
 *
 */

function buildString(...template) {
  return `I like ${template.join(', ')}!`
}
