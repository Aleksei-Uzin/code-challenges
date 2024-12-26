/**
 * Clocky Mc Clock-Face
 * https://www.codewars.com/kata/59752e1f064d1261cb0000ec/train/javascript
 *
 */

const whatTimeIsIt = angle => {
  const hh = String(~~(angle / 30) || 12).padStart(2, 0)
  const mm = ~~((angle % 30) * 2)

  return `${hh}:${mm ? String(mm).padStart(2, 0) : '00'}`
}
