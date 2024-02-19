/**
 * Haiku Checker
 * https://www.codewars.com/kata/5c765a4f29e50e391e1414d4/train/javascript
 *
 */

const isHaiku = text => {
  const arr = text.split('\n')

  for (let i = 0; i < 3; i++) {
    const sanitizeStr = arr[i].replace(/\b\w*[aeiouy]\w*[^aeiouy\s]e\b/gi, m =>
      m.slice(0, -1)
    )
    const count = (sanitizeStr.match(/[aeiouy]+/gi) || []).length

    if (i % 2 === 0 && count !== 5) return false
    else if (i % 2 !== 0 && count !== 7) return false
  }

  return true
}
