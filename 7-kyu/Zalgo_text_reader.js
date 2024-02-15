/**
 * Zalgo text reader
 * https://www.codewars.com/kata/588fe9eaadbbfb44b70001fc/train/javascript
 *
 */

const readZalgo = zalgotext => zalgotext.replace(/[^\w\s,!?\.]/g, '')
