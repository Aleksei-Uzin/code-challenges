/**
 * Versions manager
 * https://www.codewars.com/kata/5bc7bb444be9774f100000c3/train/javascript
 *
 */

const vm = (version = '') => {
  if (/^$/.test(version)) version = '0.0.1'
  if (/^\d+$/.test(version)) version = `${version}.0.0`
  if (/^\d+.\d+$/.test(version)) version = `${version}.0`

  const getVersion = (a, b, c) => `${a}.${b}.${c}`
  let [n1, n2, n3] = version
    .split('.')
    .slice(0, 3)
    .map(v => {
      if (/\D/.test(v)) throw new Error('Error occured while parsing version!')
      return Number(v)
    })
  const history = [getVersion(n1, n2, n3)]

  return {
    major() {
      n2 = n3 = 0
      history.push(getVersion(++n1, '0', '0'))
      return this
    },
    minor() {
      n3 = 0
      history.push(getVersion(n1, ++n2, '0'))
      return this
    },
    patch() {
      history.push(getVersion(n1, n2, ++n3))
      return this
    },
    rollback() {
      if (history.length === 1) throw new Error('Cannot rollback!')
      history.length = history.length - 1
      const [major, minor, patch] = this.release().split('.').map(Number)
      n1 = major
      n2 = minor
      n3 = patch
      return this
    },
    release() {
      return history[history.length - 1]
    },
  }
}
