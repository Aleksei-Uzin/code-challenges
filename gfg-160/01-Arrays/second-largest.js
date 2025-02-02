/**
 * Second Largest Element in an Array
 * https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/problem/second-largest3735
 *
 * Given an array of positive integers arr[], return the second largest element from the array.
 * If the second largest element doesn't exist then return -1.
 *
 * Note: The second largest element should not be equal to the largest element.
 *
 */

const getSecondLargest = arr => {
  let largest = -1
  let secondLargest = -1

  for (let n of arr) {
    if (n > largest) {
      secondLargest = largest
      largest = n
    }

    if (n < largest && n > secondLargest) {
      secondLargest = n
    }
  }

  return secondLargest
}

console.log(getSecondLargest([12, 35, 1, 10, 34, 1])) // 34
console.log(getSecondLargest([10, 5, 10])) // 5
console.log(getSecondLargest([10, 10, 10])) // -1
