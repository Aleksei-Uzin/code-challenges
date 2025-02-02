/**
 * Split The Bill
 * https://www.codewars.com/kata/5641275f07335295f10000d0/train/javascript
 *
 */

const splitTheBill = x => {
  const money = Object.values(x)
  const average = money.reduce((acc, val) => acc + val) / money.length

  for (let [key, cost] of Object.entries(x)) {
    const res = cost - average
    x[key] = Number.isInteger(res) ? res : +res.toFixed(2)
  }

  return x
}
