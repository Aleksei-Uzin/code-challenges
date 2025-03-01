/**
 * Finding Remainder Without Using '%' Operator
 * https://www.codewars.com/kata/564f458b4d75e24fc9000041/train/javascript
 *
 */

const remainder = (D, d) => D - ~~(D / d) * d
