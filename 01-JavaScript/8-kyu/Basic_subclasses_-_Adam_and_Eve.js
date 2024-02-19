/**
 * Basic subclasses - Adam and Eve
 * https://www.codewars.com/kata/547274e24481cfc469000416/train/javascript
 *
 */

class God {
  static create() {
    return [new Man, new Woman]
  }
}

class Human {}

class Man extends Human {}

class Woman extends Human {}
