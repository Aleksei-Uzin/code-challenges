/**
 * Last
 * https://www.codewars.com/kata/541629460b198da04e000bb9/train/javascript
 *
 */

const last = (...args) => {
  if (args.length > 1) return args[args.length - 1]

  const [elem] = args

  if (Array.isArray(elem)) return last(...elem)
  else if (typeof elem === 'string') return elem.slice(-1)
  else return elem
}
