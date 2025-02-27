/**
 * So Easy: Price of Phone
 * https://www.codewars.com/kata/57e9d0930949d3693100002c/train/javascript
 *
 */

const salePrice = cost =>
  cost.replace(/\bcost\b/gi, 'sale').replace(/(?<=\$)(\d+)/g, p => {
    let price = p * 1.15

    price = price - ~~price < 0.49 ? ~~price : Math.ceil(price)

    return price % 5 ? price + 5 - (price % 5) : price
  })
