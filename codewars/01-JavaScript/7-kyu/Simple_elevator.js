/**
 * Simple elevator
 * https://www.codewars.com/kata/52ed326b8df6540e06000029/train/javascript
 *
 */

const goto = (level, button) => {
  const reg = /^[0123]$/
  const isLevelValid = typeof level === 'number' && reg.test(level)
  const isButtonValid = typeof button === 'string' && reg.test(button)

  if (!isLevelValid || !isButtonValid) return 0

  return button - level
}
