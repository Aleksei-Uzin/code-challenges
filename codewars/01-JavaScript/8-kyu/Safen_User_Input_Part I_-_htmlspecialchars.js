/**
 * Safen User Input Part I - htmlspecialchars
 * https://www.codewars.com/kata/56bcaedfcf6b7f2125001118/train/javascript
 *
 */

const htmlspecialchars = formData => {
  const arr = formData.split('')
  
  arr.map((char, i, a) => {
    if(char === '<') a[i] = '&lt;'
    if(char === '>') a[i] = '&gt;'
    if(char === '"') a[i] = '&quot;'
    if(char === '&') a[i] = '&amp;'
  })
  
  return arr.join('')
}
