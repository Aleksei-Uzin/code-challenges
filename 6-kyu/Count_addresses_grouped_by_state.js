/**
 * Count addresses grouped by state
 * https://www.codewars.com/kata/55f8370b0229d3dad000007a/train/javascript
 *
 */

const count = addresses => {
  const res = []

  for (let item of addresses) {
    const state = item.state

    if (!state) throw Error('Incorrect array of addresses')

    const index = res.findIndex(({ state: st }) => st === state)

    index === -1
      ? res.push({
          state,
          count: 1,
        })
      : (res[index].count += 1)
  }

  return res
}
