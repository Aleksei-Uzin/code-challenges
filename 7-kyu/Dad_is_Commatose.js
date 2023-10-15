/**
 * Dad is Commatose
 * https://www.codewars.com/kata/56a24b309f3671608b00003a/train/javascript
 *
 */

const dadFilter = str => str.replace(/,(?=,)|(,+\s*)$/g, '')
