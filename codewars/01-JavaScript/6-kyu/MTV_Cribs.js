/**
 * MTV Cribs
 * https://www.codewars.com/kata/5834a44e44ff289b5a000075/train/javascript
 *
 */

const myCrib = n => {
  const roof = n + 1
  const floor = n * 2
  const mansion = []

  for (let i = 0; i < roof; i++) {
    const s = i < roof - 1 ? ' ' : '_'
    const space = s.repeat(floor / 2 - i)
    const layer = `${space}/${s.repeat(i * 2)}\\${space}`
    mansion.push(layer)
  }

  for (let i = 0; i < n; i++) {
    const s = i < n - 1 ? ' ' : '_'
    const layer = `|${s.repeat(floor)}|`
    mansion.push(layer)
  }

  return mansion.join('\n')
}
