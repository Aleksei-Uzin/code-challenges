/**
 * Fun with lists: map
 * https://www.codewars.com/kata/58259d9062cfb45e1a00006b/train/javascript
 *
 */

const map = (head, func) => head
  ? new Node(func(head.data), map(head.next, func))
  : null
