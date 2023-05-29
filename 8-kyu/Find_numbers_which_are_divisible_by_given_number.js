/**
 * Find numbers which are divisible by given number
 * https://www.codewars.com/kata/55edaba99da3a9c84000003b/train/javascript
 *
 */

const divisibleBy = (numb, div) => numb.filter(x => !(x % div))
