/**
 * Discover The Original Price
 * https://www.codewars.com/kata/552564a82142d701f5001228/train/javascript
 *
 */

const discoverOriginalPrice = (discountedPrice, salePercentage) =>
  +((discountedPrice * 100) / (100 - salePercentage)).toFixed(2)
