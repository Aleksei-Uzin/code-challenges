/**
 * Unfinished Loop - Bug Fixing #1
 * https://www.codewars.com/kata/55c28f7304e3eaebef0000da/train/javascript
 *
 */

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; newArray.push(counter++));
  
  return newArray;
}
