/**
 * Fix my method
 * https://www.codewars.com/kata/558710234f02dcc4a8000005/train/javascript
 *
 */

function myFunction() {
  const MyObject = {
    objProperty: 'string',
    objMethod() {
      return MyObject.objProperty
    },
  }

  return MyObject
}
