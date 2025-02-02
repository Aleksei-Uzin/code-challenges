/**
 * Seagull Snapshot Festival Obsession
 * https://www.codewars.com/kata/663fe90a04bdcc6db4c091b9/train/javascript
 *
 */

const snapshot = scene => {
  const len = scene.replace(/[^seagul]+/, '').length

  if (!len || scene.length < 11) return scene

  let str = ''
  let n = 2

  while (str.length < 11) {
    const reg = new RegExp(`.{0,${n}}[seagul]{1,7}.{0,${n}}`)
    str = scene.match(reg)[0]
    n += 1
  }

  return scene.replace(str, m => {
    const s1 = m.slice(2, 5)
    const s2 = m.slice(6, -2)
    return `[[${s1}x${s2}]]`
  })
}
