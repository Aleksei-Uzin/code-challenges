/**
 * Proof Read
 * https://www.codewars.com/kata/583710f6b468c07ba1000017/train/javascript
 *
 */

const proofread = str =>
  str
    .toLowerCase()
    .replace(/(i)(e)/gi, '$2$1')
    .replace(/(?<=\.\s|^)\w/g, m => m.toUpperCase())
