/**
 * Kontti Language
 * https://www.codewars.com/kata/570e1271e5c9a0cf2f000d11/train/javascript
 *
 */

String.prototype.kontti = function () {
  return this.split(' ')
    .map(word => {
      if (!word || /^[^aeiouy]+$/.test(word)) return word

      const part = word.replace(/^(.*?[aeiouy]).*/, '$1')
      const l = part.length

      return `ko${word.slice(l)}-${word.slice(0, l)}ntti`
    })
    .join(' ')
}
