/**
 * n-back
 * https://www.codewars.com/kata/599c7f81ca4fa35314000140/train/javascript
 *
 */

const countTargets = (n, sequence) => {
  let res = 0

  for (let i = n; i < sequence.length; i++) {
    if (sequence[i - n] === sequence[i]) res++
  }

  return res
}
