/**
 * Infinite Sequences
 * https://www.codewars.com/kata/5440f068cf362592e4000cd6/train/javascript
 *
 */

class Sequence {
  constructor(fun) {
    this.fun = fun
  }

  *_valueGenerator() {
    let n = 0
    while (true) {
      yield this.fun(n++)
    }
  }

  take(n) {
    const gen = this._valueGenerator()
    const res = []

    for (let i = 0; i < n; i++) {
      res.push(gen.next().value)
    }

    return res
  }

  takeWhile(predicate) {
    const gen = this._valueGenerator()
    const res = []
    let val = null

    while (predicate((val = gen.next().value))) {
      res.push(val)
    }

    return res
  }
}

const sequence = fun => new Sequence(fun)
