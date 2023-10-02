/**
 * Printer Errors
 * https://www.codewars.com/kata/56541980fa08ab47a0000040/train/javascript
 *
 */

const printerError = s => `${s.match(/[n-z]/g)?.length ?? 0}/${s.length}`
