/**
 * Salesman's Travel
 * https://www.codewars.com/kata/56af1a20509ce5b9b000001e/train/javascript
 *
 */

const travel = (r, zipcode) => {
  const reg = `(\\d+[a-z\\s\\.]+)(?= ${zipcode}\\b)`
  const addresses = r.match(new RegExp(reg, 'gi'))

  if (!addresses || !zipcode) return `${zipcode}:/`

  const nums = []
  const streets = []

  for (let address of addresses) {
    const [num, street] = address.match(/\d+|\D+/g)
    nums.push(num)
    streets.push(street.trimStart())
  }

  return `${zipcode}:${streets.join(',')}/${nums.join(',')}`
}
