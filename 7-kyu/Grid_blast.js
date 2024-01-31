/**
 * Grid blast!
 * https://www.codewars.com/kata/54fdfe14762e2edf4a000a33/train/javascript
 *
 */

//              THE BATTLEFIELD GRID
// ['top left',    'top middle',    'top right',
//  'middle left', 'center',        'middle right',
//  'bottom left', 'bottom middle', 'bottom right']
//
const fire = (x, y) => grid[y * 3 + x]
