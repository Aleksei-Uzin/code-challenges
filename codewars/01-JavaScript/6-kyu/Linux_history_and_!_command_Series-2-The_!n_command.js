/**
 * Linux history and `!` command. Series#2 The `!n` command
 * https://www.codewars.com/kata/5814bf3f3db1ffc0180000d3/train/javascript
 *
 */

const bangN = (n, history) => {
  history = history.split('\n')
  const command = history[n - 1]

  return command ? command.replace(/^\s+\d+\s+/, '') : `!${n}: event not found`
}
