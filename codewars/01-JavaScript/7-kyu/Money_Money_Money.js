/**
 * Money, Money, Money
 * https://www.codewars.com/kata/563f037412e5ada593000114/train/javascript
 *
 */

const calculateYears = (principal, interest, tax, desired) => {
  let res = 0

  while (principal < desired) {
    const sum = principal * interest
    const taxSum = sum * tax
    principal += sum - taxSum
    res += 1
  }

  return res
}
