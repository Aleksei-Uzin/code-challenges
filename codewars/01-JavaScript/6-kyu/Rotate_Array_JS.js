/**
 * Rotate Array (JS)
 * https://www.codewars.com/kata/54f8b0c7a58bce9db6000dc4/train/javascript
 *
 */

const rotate = (arr, n) => {
  const len = arr.length
  const i = Math.abs(n) > len ? n % len : n

  return i > 0
    ? [...arr.slice(len - i), ...arr.slice(0, len - i)]
    : [...arr.slice(i * -1), ...arr.slice(0, i * -1)]
}

// Best practice:
//
// function rotate(array, n) {
//   n = n % array.length
//   return array.slice(-n).concat(array.slice(0, -n))
// }
