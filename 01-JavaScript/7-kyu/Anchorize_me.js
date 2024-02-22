/**
 * Anchorize me!
 * https://www.codewars.com/kata/5722aeda785220c84900109b/train/javascript
 *
 */

const anchorize = text =>
  text.replace(
    /(https?|ftps?|file|smb)\S+/gi,
    url => `<a href="${url}">${url}</a>`
  )
