/**
 * Valid Spacing
 * https://www.codewars.com/kata/5f77d62851f6bc0033616bd8/train/javascript
 *
 */

const validSpacing = s => /^$|^\b(\w+\s?\w*)+\b$/.test(s)
