/**
 * Strip Comments
 * https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
 *
 */

const solution = (text, markers) => {
  if (markers.length === 0) return text.replace(/\s*$/gm, '')

  const markersStr = markers.map(marker => `\\${marker}`).join('|')
  const reg = new RegExp('([ ]*(' + markersStr + ').*)|[ ]*$', 'gm')

  return text.replace(reg, '')
}
