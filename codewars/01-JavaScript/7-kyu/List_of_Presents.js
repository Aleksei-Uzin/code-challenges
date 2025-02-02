/**
 * List of Presents
 * https://www.codewars.com/kata/5a84d485742ba347b90006b7/train/javascript
 *
 */

const howManyGifts = (maxBudget, gifts) =>
  gifts
    .sort((a, b) => a - b)
    .reduce((acc, gift) => ((maxBudget -= gift) >= 0 ? acc + 1 : acc), 0)
