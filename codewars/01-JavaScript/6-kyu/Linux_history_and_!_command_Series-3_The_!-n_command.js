/**
 * Linux history and `!` command. Series#3 The `!-n` command
 * https://www.codewars.com/kata/5815fd7441e062463d0000f8/train/javascript
 *
 */

const bangMinusN = (n, history) => {
  history = history.split('\n')
  const command = history[history.length - n]

  return command ? command.replace(/^\s+\d+\s+/, '') : `!-${n}: event not found`
}
