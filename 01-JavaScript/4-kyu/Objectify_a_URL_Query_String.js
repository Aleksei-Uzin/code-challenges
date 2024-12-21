/**
 * Objectify a URL Query String
 * https://www.codewars.com/kata/5286d92ec6b5a9045c000087/train/javascript
 *
 */

function convertQueryToMap(query) {
  const queryArr = query.split('&')
  let res = {}

  for (let item of queryArr) {
    const [key, value] = item.split('=')
    const keys = key.split('.')
    let currentLevel = res

    for (let i = 0; i < keys.length; i++) {
      const k = keys[i]
      if (i === keys.length - 1) {
        currentLevel[k] = decodeURIComponent(value)
      } else {
        currentLevel[k] = currentLevel[k] || {}
        currentLevel = currentLevel[k]
      }
    }
  }

  return res
}
