/**
 * Remove the noise from the string
 * https://www.codewars.com/kata/5681cf0be812b41721000034/train/javascript
 *
 */

const removeNoise = str => str.replace(/[%$&/#·@|º\\ª]/g, '')
