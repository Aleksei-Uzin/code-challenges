/**
 * Filter valid romans
 * https://www.codewars.com/kata/58334362c5637ad0bb0001c2/train/javascript
 *
 */

const validRomans = arr =>
  arr.filter(
    n => n && /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(n)
  )
