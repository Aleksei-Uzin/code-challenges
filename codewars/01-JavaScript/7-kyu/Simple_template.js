/**
 * Simple template
 * https://www.codewars.com/kata/56ae72854d005c7447000023/train/javascript
 *
 */

const createTemplate = template => obj =>
  template.replace(/{{(\w+)}}/g, (_, key) => obj[key] || '')
