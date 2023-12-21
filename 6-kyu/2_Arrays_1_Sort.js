/**
 * 2 Arrays 1 Sort
 * https://www.codewars.com/kata/546b22225874d24fbd00005b/train/javascript
 *
 */

const linkedSort = (aToSort, aLinked, compare) => {
  const aToSortCopy = aToSort.slice()
  const aLinkedCopy = aLinked.slice()
  aToSort.sort(compare)

  for (let i = 0; i < aLinked.length; i++) {
    const item = aToSort[i]
    const index = aToSortCopy.indexOf(item)
    aToSortCopy[index] = undefined
    aLinked[i] = aLinkedCopy[index]
  }

  return aToSort
}
