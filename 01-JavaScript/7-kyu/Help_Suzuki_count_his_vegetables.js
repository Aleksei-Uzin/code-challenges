/**
 * Help Suzuki count his vegetables....
 * https://www.codewars.com/kata/56ff1667cc08cacf4b00171b/train/javascript
 *
 */

const countVegetables = str => {
  const vegetables = [
    'cabbage',
    'carrot',
    'celery',
    'cucumber',
    'mushroom',
    'onion',
    'pepper',
    'potato',
    'tofu',
    'turnip',
  ]
  const res = []

  for (let item of vegetables) {
    const reg = new RegExp(`${item}`, 'g')
    const n = (str.match(reg) || []).length

    if (n) {
      res.push([n, item])
    }
  }

  res.sort(([n1, v1], [n2, v2]) => {
    if (n1 > n2) return -1
    if (n1 === n2) return v2.localeCompare(v1)
  })

  return res
}
