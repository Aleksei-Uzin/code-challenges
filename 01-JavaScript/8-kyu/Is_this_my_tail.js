/**
 * Is this my tail?
 * https://www.codewars.com/kata/56f695399400f5d9ef000af5/train/javascript
 *
 */

function correctTail(body, tail) {
  const sub = body.substr(body.length - tail.length)
                          
  if(sub === tail) {
    return true
  } else {
    return false
  }
}
