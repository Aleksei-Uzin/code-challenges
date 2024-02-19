/**
 * Calculating with Functions
 * https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
 *
 */

const has = (num, calc) => calc ? calc(num) : num

const zero  = (calc) => has(0, calc)
const one   = (calc) => has(1, calc)
const two   = (calc) => has(2, calc)
const three = (calc) => has(3, calc)
const four  = (calc) => has(4, calc)
const five  = (calc) => has(5, calc)
const six   = (calc) => has(6, calc)
const seven = (calc) => has(7, calc)
const eight = (calc) => has(8, calc)
const nine  = (calc) => has(9, calc)

const plus = a => b => a + b
const minus = a => b => b - a
const times = a => b => a * b
const dividedBy = a => b => Math.floor(b / a)
