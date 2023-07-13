/**
 * Will there be enough space?
 * https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript
 *
 */

const enough = (cap, on, wait) => (on + wait) > cap ? (on + wait - cap) : 0
