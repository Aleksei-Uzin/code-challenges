/**
 * String to list of integers.
 * https://www.codewars.com/kata/5727868888095bdf5c001d3d/train/javascript
 *
 */

const stringToIntArray = s => (s.match(/-?\d+/g) || []).map(Number)
