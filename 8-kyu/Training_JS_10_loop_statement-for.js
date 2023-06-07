/**
 * Training JS #10: loop statement --for
 * https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript
 *
 */

const pickIt = arr => {
  var odd=[], even=[];
  
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2) {
      odd.push(arr[i])
    } else {
      even.push(arr[i])
    }
  }
  
  return [odd,even];
}
