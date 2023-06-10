/**
 * Detect Pangram
 * https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript
 *
 */

const isPangram = str => {
  const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let isPangram = false

  for(let i = 0; i < abc.length; i++) {
    if(str.toLowerCase().includes(abc[i])) {
      isPangram = true
    } else {
      isPangram = false

      break
    }
  }
  
  return isPangram
}
