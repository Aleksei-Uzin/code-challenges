/**
 * Product of consecutive Fib numbers
 * https://www.codewars.com/kata/5541f58a944b85ce6d00006a/train/javascript
 *
 */

const productFib = prod => {
  let [n1, n2] = [0, 1]

  while (n1 * n2 < prod) {
    const sum = n1 + n2
    n1 = n2
    n2 = sum
  }

  return [n1, n2, n1 * n2 === prod]
}
