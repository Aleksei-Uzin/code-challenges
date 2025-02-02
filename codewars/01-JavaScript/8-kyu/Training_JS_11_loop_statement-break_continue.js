/**
 * Training JS #11: loop statement --break,continue
 * https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript
 *
 */

const grabDoll = dolls => {
  var bag = [],
      len = dolls.length
  
  for(let i = 0; i <= len; i++) {
    var doll = dolls[i]

    if(doll !== 'Hello Kitty' && doll !== 'Barbie doll') continue
    
    if(bag.length === 3) break

    bag.push(doll)
  }
 
  return bag
}
