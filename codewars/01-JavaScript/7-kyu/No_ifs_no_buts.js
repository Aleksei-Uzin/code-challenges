/**
 * No ifs no buts
 * https://www.codewars.com/kata/592915cc1fad49252f000006/train/javascript
 *
 */

const noIfsNoButs = (a, b) => {
  switch (true) {
    case a > b:
      return `${a} is greater than ${b}`
    case a < b:
      return `${a} is smaller than ${b}`
    default:
      return `${a} is equal to ${b}`
  }
}
