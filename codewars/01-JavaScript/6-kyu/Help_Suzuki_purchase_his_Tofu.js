/**
 * Help Suzuki purchase his Tofu!
 * https://www.codewars.com/kata/57d4ecb8164a67b97c00003c/train/javascript
 *
 */

const buyTofu = (cost, box) => {
  const arr = box.split(' ')
  const monmeVal = 60
  const monVal = 1
  const count = {
    mon: 0,
    monme: 0,
    sum: 0,
  }

  for (let item of arr) {
    if (/^mon(me)?$/.test(item)) {
      count.sum += /me$/.test(item) ? monmeVal : monVal
      count[item] += 1
    }
  }

  const { mon, monme, sum } = count
  let minNumbOfMonme = Math.floor(cost / monmeVal)
  minNumbOfMonme = minNumbOfMonme < monme ? minNumbOfMonme : monme
  const minNumbOfMon = cost - minNumbOfMonme * monmeVal

  if (mon < minNumbOfMon) return 'leaving the market'

  return [mon, monme, sum, minNumbOfMonme + minNumbOfMon]
}
