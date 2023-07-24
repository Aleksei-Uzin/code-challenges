/**
 * Who is going to pay for the wall?
 * https://www.codewars.com/kata/58bf9bd943fadb2a980000a7/train/javascript
 *
 */

const whoIsPaying = name => {
  const res = [name]

  if(name.length > 2) {
    res.push(name.slice(0, 2))
  }
  
  return res
}
