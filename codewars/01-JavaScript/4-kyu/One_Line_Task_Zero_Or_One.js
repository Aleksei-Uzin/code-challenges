/**
 * One Line Task: Zero Or One
 * https://www.codewars.com/kata/59031db02b0070a923000110/train/javascript
 *
 */

zeroOrOne = (a, b) => b[0].map((c, d) => b.map(b => b[d]).sort()[~~(a / 2)])
