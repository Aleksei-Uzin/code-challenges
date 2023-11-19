/**
 * LinkedList -> Array
 * https://www.codewars.com/kata/557dd2a061f099504a000088/train/javascript
 *
 */

const listToArray = list => {
  const arr = []

  for (let i = list; i; i = i.next) {
    arr.push(i.value)
  }

  return arr
}
