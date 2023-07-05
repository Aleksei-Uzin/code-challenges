/**
 * Decibel Scale
 * https://www.codewars.com/kata/5612a42e746aa62de100001a/train/javascript
 *
 */

const dBScale = i => 10 * Math.log10(i / Math.pow(10, -12))
