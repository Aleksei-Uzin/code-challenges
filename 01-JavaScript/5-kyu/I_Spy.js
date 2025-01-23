/**
 * I Spy
 * https://www.codewars.com/kata/555185132c0d4cca3d000197/train/javascript
 *
 */

function spyOn(func) {
  const argsSet = new Set()
  const resSet = new Set()
  let n = 0

  function spyFn(...args) {
    const res = func(...args)

    args.forEach(val => argsSet.add(val))
    resSet.add(res)
    n++

    return res
  }

  spyFn.callCount = () => n
  spyFn.wasCalledWith = val => argsSet.has(val)
  spyFn.returned = val => resSet.has(val)

  return spyFn
}
