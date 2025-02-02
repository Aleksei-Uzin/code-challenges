/**
 * Email Address Obfuscator
 * https://www.codewars.com/kata/562d8d4c434582007300004e/train/javascript
 *
 */

const obfuscate = email => {
  const obj = { '@': 'at', '.': 'dot' }
  return email.replace(/\.|@/g, m => ` [${obj[m]}] `)
}
