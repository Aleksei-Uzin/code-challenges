/**
 * Regex Series: Match All Except X
 * https://www.codewars.com/kata/614a4eaeeae33e003fde909b/train/javascript
 *
 */

const regex = /(?!\b\w*(?:\bcode\b|\bwar\b))\b\w*[^\W]/gi

// Best practice
//
// const regex = /\b(?!(code|war)\b)\w+/gi;
