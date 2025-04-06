/**
 * Linux history and `!` command. Series#5 The `!?string` command
 * https://www.codewars.com/kata/581b29b549b2c0daeb001454/train/javascript
 *
 */

const bangContainString = (s, history) => {
  history = history.split('\n')
  const reg = new RegExp(`${s}`)

  for (let i = history.length - 1; i >= 0; i--) {
    const command = history[i].replace(/^\s+\d+\s+/, '')
    if (reg.test(command)) return command
  }

  return `!${s}: event not found`
}
