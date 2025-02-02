/**
 * Error Throwing - Error Handling #2
 * https://www.codewars.com/kata/55e7650c8d894146be000095/train/javascript
 *
 */

const validateMessage = msg => {
  if (msg === null) {
    throw ReferenceError('Message is null!')
  } else if (typeof msg !== 'string') {
    throw TypeError(
      `Message should be of type string but was of type ${typeof msg}!`
    )
  } else if (msg.length === 0 || msg.length > 255) {
    throw RangeError(`Message contains ${msg.length} characters!`)
  }

  return !/(\<\s*[a-z]+)\s*\>/g.test(msg)
}
