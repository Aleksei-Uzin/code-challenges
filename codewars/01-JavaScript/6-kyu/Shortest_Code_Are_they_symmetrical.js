/**
 * Shortest Code : Are they symmetrical?
 * https://www.codewars.com/kata/5705b59f5eef1f04f1000f84/train/javascript
 *
 */

sc = o => (
  (o = Array.isArray(o) ? o : [...`${o}`]),
  o.length < 2 ? !0 : o.shift() !== o.pop() ? !1 : sc(o)
)
