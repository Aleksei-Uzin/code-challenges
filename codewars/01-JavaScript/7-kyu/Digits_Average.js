/**
 * Digits Average
 * https://www.codewars.com/kata/5a32526ae1ce0ec0f10000b2/train/javascript
 *
 */

const digitsAverage = input => {
  if (input < 10) return input

  const newInput = [...`${input}`]
    .map(Number)
    .reduce(
      (acc, n, i, arr) =>
        i < arr.length - 1 ? acc + Math.ceil((n + arr[i + 1]) / 2) : acc,
      ''
    )

  return digitsAverage(+newInput)
}
