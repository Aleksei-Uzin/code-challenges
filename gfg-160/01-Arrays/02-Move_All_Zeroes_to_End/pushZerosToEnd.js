/**
 * Function moves all zeros to end
 * My solution
 *
 */

export function pushZerosToEnd(arr) {
  let zeroCounter = 0

  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i]

    if (elem === 0) {
      zeroCounter += 1
    }

    if (elem !== 0 && zeroCounter > 0) {
      arr[i - zeroCounter] = arr[i]
      arr[i] = 0
      zeroCounter -= 1
      i -= 1
    }
  }
}
