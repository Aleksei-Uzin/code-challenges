/**
 * Colour Association
 * https://www.codewars.com/kata/56d6b7e43e8186c228000637/train/javascript
 *
 */

const colourAssociation = arr =>
  arr.map(([color, meaning]) => ({ [color]: meaning }))
