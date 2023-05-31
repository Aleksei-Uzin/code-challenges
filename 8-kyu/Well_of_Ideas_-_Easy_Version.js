/**
 * Well of Ideas - Easy Version
 * https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript
 *
 */

function well(x) {
  const ideas = x.filter(idea => idea === 'good')
  const len = ideas.length
  
  if(!len) {
    return 'Fail!'
  } else if(len <= 2) {
    return 'Publish!'
  } else {
    return 'I smell a series!'
  }
}
