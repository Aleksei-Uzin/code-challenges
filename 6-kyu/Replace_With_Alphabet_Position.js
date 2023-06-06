/**
 * Replace With Alphabet Position
 * https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
 *
 */

const alphabetPosition = text => {
  const abc = ['','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  const arr = text.toLowerCase().match(/[a-z]/g)?.map(x => abc.findIndex(char => char === x))
  
  return arr ? arr.join(' ') : ''
}
