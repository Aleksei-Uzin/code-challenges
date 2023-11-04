/**
 * Implementing a Queue
 * https://www.codewars.com/kata/55a9c0994cb7e284d500005e/train/javascript
 *
 */

class Queue {
  constructor() {
    this.queue = []
  }

  enqueue(item) {
    this.queue.push(item)
  }
  dequeue() {
    return this.queue.shift()
  }
  size() {
    return this.queue.length
  }
}
