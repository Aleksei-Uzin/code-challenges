/**
 * Coding 3min : Balance Attraction
 * https://www.codewars.com/kata/57033601e55d30d3e0000633/train/javascript
 *
 */

const sc = (str, chars) =>
  chars.reduce((acc, val) => {
    const reg = new RegExp(`${val}+`, 'g')
    const [match] = (acc.match(reg) || []).sort()
    let done = true

    return match
      ? acc.replace(reg, m =>
          m.length === match.length && done ? ((done = false), m + val) : m
        )
      : acc + val
  }, str)
