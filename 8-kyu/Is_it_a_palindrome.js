/**
 * Is it a palindrome?
 * https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript
 *
 */

const isPalindrome = x => {
  const arr = x.toLowerCase().match(/\w/g) ?? []
  
  return arr.join('') === arr.reverse().join('')
}
