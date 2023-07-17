/**
 * Simple Fun #1: Seats in Theater
 * https://www.codewars.com/kata/588417e576933b0ec9000045/train/javascript
 *
 */

const seatsInTheater = (nCols, nRows, col, row) => (nCols - col + 1) * (nRows - row)
