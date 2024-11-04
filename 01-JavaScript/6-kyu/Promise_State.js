/**
 * Promise State
 * https://www.codewars.com/kata/6534ea9defdd85005848c2bd/train/javascript
 *
 */

const getState = async promise => {
  const obj = {}

  try {
    const res = await Promise.race([promise, obj])
    return res === obj ? 'pending' : 'fulfilled'
  } catch {
    return 'rejected'
  }
}
