/**
 * ASCII Total
 * https://www.codewars.com/kata/572b6b2772a38bc1e700007a/train/javascript
 *
 */

const uniTotal = str => str.split('').reduce((a, b) => a + b.charCodeAt(0), 0)
