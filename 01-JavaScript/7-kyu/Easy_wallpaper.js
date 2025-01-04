/**
 * Easy wallpaper
 * https://www.codewars.com/kata/567501aec64b81e252000003/train/javascript
 *
 */

const wallpaper = (l, w, h) => {
  const numbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
  ]

  if (!l || !w) return 'zero'

  const res = Math.ceil(((2 * (l + w) * h) / (0.52 * 10)) * 1.15)

  return numbers[res]
}
