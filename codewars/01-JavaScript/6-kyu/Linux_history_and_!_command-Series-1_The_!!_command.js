/**
 * Linux history and `!` command. Series#1 The `!!` command
 * https://www.codewars.com/kata/58143221f9588e340e00009f/train/javascript
 *
 */

const bangBang = history => {
  history = history.split('\n')
  const last = history[history.length - 1]
  return last.replace(/^\s+\d+\s+/, '')
}
