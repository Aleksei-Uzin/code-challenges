/**
 * Most sales
 * https://www.codewars.com/kata/5e16ffb7297fe00001114824/train/javascript
 *
 */

const top3 = (products, amounts, prices) => {
  products = products.map((name, i) => ({
    name,
    revenue: amounts[i] * prices[i],
    i,
  }))
  const sorted = products.sort((a, b) => b.revenue - a.revenue || a.i - b.i)
  sorted.length = 3

  return sorted.map(({ name }) => name)
}
