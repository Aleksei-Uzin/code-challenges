/**
 * Add a property to an object
 * https://www.codewars.com/kata/55f2c3dde50947271200006a/train/javascript
 *
 */

const addProperty = (obj, prop, value) => {
  if (Object.hasOwn(obj, prop)) throw Error
  else obj[prop] = value

  return obj
}
