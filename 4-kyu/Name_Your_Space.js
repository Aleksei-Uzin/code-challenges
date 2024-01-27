/**
 * Name Your Space
 * https://www.codewars.com/kata/514b6c44a337752e67000077/train/javascript
 *
 */

const namespace = (root, path, value) => {
  const pathArr = path.split('.')

  if (value !== undefined) {
    pathArr.reduce((obj, key, i) => {
      if (i === pathArr.length - 1) obj[key] = value
      if (!obj[key]) obj[key] = {}
      return obj[key]
    }, root)
  } else {
    return pathArr.reduce((obj, key) => obj?.[key], root)
  }

  return root
}
