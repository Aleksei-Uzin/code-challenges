/**
 * Display Large Numbers
 * https://www.codewars.com/kata/57f318ce828b3553b40013ea/train/javascript
 *
 */

const displayLargeNumber = n => n.toString().replace(/\d(?=(\d{3})+$)/g, '$&,')
