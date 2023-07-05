/**
 * Training JS #31: methods of arrayObject---isArray() indexOf() and toString()
 * https://www.codewars.com/kata/5732b0351eb838d03300101d/train/javascript
 *
 */

const blackAndWhite = arr => {
  if(!Array.isArray(arr)) return "It's a fake array"
  
  if(arr.indexOf(5) > -1 && arr.indexOf(13) > -1) return "It's a black array"
  
  return "It's a white array"
}
