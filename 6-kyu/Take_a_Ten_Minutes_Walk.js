/**
 * Take a Ten Minutes Walk
 *
 */

const isValidWalk = walk => {
  if (walk.length !== 10) return false

  const { n, s, e, w } = walk.reduce(
    (acc, val) => (acc[val] ? (acc[val] += 1) : (acc[val] = 1), acc),
    { n: 0, s: 0, e: 0, w: 0 }
  )

  return n - s === 0 && e - w === 0
}
