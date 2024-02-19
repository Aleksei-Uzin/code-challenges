/**
 * NBA full 48 minutes average
 * https://www.codewars.com/kata/587c2d08bb65b5e8040004fd/train/javascript
 * 
 */

function pointsPer48(ppg, mpg) {
  return ppg ? Number((ppg / mpg * 48).toFixed(1)) : 0;
}
