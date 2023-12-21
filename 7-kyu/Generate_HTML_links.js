/**
 * Generate HTML links
 * https://www.codewars.com/kata/56896f078dcf3e886c000067/train/javascript
 *
 */

const generateMenu = menuItems =>
  menuItems.map(({ url, text }) => `<a href=\"${url}\">${text}</a>`).join('')
