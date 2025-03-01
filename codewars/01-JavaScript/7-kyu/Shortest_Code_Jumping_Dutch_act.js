/**
 * Shortest Code : Jumping Dutch act
 * https://www.codewars.com/kata/570bbf7b6731d44b36001fde/train/javascript
 *
 */

const sc = f =>
  f > 1 ? `${'Aa~ '.repeat(f - 1)}Pa!${f <= 6 ? ' Aa!' : ''}` : ''
