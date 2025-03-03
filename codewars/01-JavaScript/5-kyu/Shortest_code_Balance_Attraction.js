/**
 * Shortest code : Balance Attraction
 * https://www.codewars.com/kata/5700c79dc155575b31000265/train/javascript
 *
 */

const sc = (str, c) =>
  c.reduce((s, v) => {
    const r = new RegExp(`${v}+`, 'g')
    const [a] = (s.match(r) || []).sort()
    let done = true

    return a
      ? s.replace(r, m =>
          m.length === a.length && done ? ((done = false), m + v) : m
        )
      : s + v
  }, str)
