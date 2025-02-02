/**
 * Scott Booleans
 * https://www.codewars.com/kata/63d1ba782de94107abbf85c3/train/javascript
 *
 */

const False = f => t => f

const True = f => t => t

const iff = func => f => t => func(t)(f)
