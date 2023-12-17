/**
 * Training JS #42: Regular Expression--( ?: ), ( ?= ) and ( ?! )
 * https://www.codewars.com/kata/573fb9223f9793e485000453/train/javascript
 *
 */

const regex = /\d(?=(\d{3})+$)/g

const addCommas = (money, reg) => {
  return money.replace(reg, x => x + ',')
}
