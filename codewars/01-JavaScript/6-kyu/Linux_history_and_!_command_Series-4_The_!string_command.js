/**
 * Linux history and `!` command. Series#4 The `!string` command
 * https://www.codewars.com/kata/5818236ae7f457017b00022b/train/javascript
 *
 */

const bangStartString = (s, history) => {
  history = history.split('\n')
  const reg = new RegExp(`^${s}`)

  for (let i = history.length - 1; i >= 0; i--) {
    const command = history[i].replace(/^\s+\d+\s+/, '')
    if (reg.test(command)) return command
  }

  return `!${s}: event not found`
}
