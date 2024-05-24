/**
 * A Letter's Best Friend
 * https://www.codewars.com/kata/64fc03a318692c1333ebc04c/train/javascript
 *
 */

const bestFriend = (txt, a, b) => !new RegExp(`${a}(?!${b})`).test(txt)
