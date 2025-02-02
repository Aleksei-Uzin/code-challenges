/**
 * "Stringing"+"Me"+"Along"
 * https://www.codewars.com/kata/55f4a44eb72a0fa91600001e/train/javascript
 *
 */

const createMessage = str => next =>
  next ? createMessage(`${str} ${next}`) : str
