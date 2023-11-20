/**
 * One Line Task: Making Pizza
 * https://www.codewars.com/kata/58dbb9b82f449e134a000119/train/javascript
 *
 */

function makePizza(pieces) { //Let's make n pieces of Pizza ;-)
  var result = "";
  while ( pieces-- ){
    var needSteps = 5;
    while ( needSteps-- ) result += make( needSteps +1);
  }
  return result;
}
function make(step){
  switch ( step ){
    case 5: return "P";
    case 4: return "i";
    case 3: 
    case 2: return "z";
    case 1: return "a";
  }
}
