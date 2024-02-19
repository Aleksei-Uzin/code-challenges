/**
 * Pluck
 * https://www.codewars.com/kata/530017aac7c0f49926000084/train/javascript
 *
 */

const pluck = (objs, name) =>
  objs.reduce((acc, val) => (acc.push(val[name]), acc), [])
