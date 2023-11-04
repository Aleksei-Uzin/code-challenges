/**
 * Spin Around, Touch the Ground
 * https://www.codewars.com/kata/65127141a5de2b1dcb40927e/train/javascript
 *
 */

const spinAround = turns => {
  const sum = Math.abs(
    turns.reduce((acc, val) => (acc += val === 'right' ? 90 : -90), 0)
  )

  return ~~(sum / 360)
}
