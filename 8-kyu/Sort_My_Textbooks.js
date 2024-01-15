/**
 * Sort My Textbooks
 * https://www.codewars.com/kata/5a07e5b7ffe75fd049000051/train/javascript
 *
 */

const sorter = textbooks =>
  textbooks.sort((a, b) => {
    const itemA = a.toUpperCase()
    const itemB = b.toUpperCase()

    if (itemA < itemB) {
      return -1
    } else if (itemA > itemB) {
      return 1
    } else {
      return 0
    }
  })
